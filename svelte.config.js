import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex , escapeSvelte} from 'mdsvex'
import { getHighlighter }from 'shiki'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
//import rehypeToc from '@jsdevtools/rehype-toc'

//Get the headings of the post to make a Table of Contents
//https://github.com/pngwn/MDsveX/discussions/268
function getHeadings(){
	let visit 
	let treeToString

	return async function transform(tree, vFile){
		if(!visit){
			treeToString = (await import('mdast-util-to-string')).toString
			visit = (await import('unist-util-visit')).visit
		}

		vFile.data.headings = []

		visit(tree,'heading',(node)=> {
			vFile.data.headings.push(
				{
					level:node.depth,
					title: treeToString(node)
				}
			)
		})

		if(!vFile.data.fm) vFile.data.fm = {}
		vFile.data.fm.headings = vFile.data.headings
	}
}



/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout:{
		_: './src/mdsvex.svelte'
	},
	remarkPlugins: [remarkUnwrapImages, [remarkToc, {tight: true}],getHeadings ], //tight removes <p> from <li> and <img> parsing
	rehypePlugins: [rehypeSlug, 
		/*[
		rehypeToc, {
				'headings':['h2','h3', 'h4', 'h5', 'h6'],
			}
		]*/
	],
	highlight: {
		highlighter: async(code, lang='text') =>{
			//This code makes svelte ignores the code in the md post and convert to Highlighthem
			const highlighter = await getHighlighter({theme:'monokai'})
			const html = escapeSvelte(highlighter.codeToHtml(code,{lang}))
			return `{@html \`${html}\`}`
		}
	}
}


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter()
	}
};

export default config;
