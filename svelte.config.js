import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex , escapeSvelte} from 'mdsvex'
import { getHighlighter }from 'shiki'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout:{
		_: './src/mdsvex.svelte'
	},
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]], //tight removes <p> from <li> and <img> parsing
	rehypePlugins: [rehypeSlug],
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
