import type { Post } from "$lib/types"
import { error, json } from "@sveltejs/kit"


async function getPosts(){
    let posts : Post[] = []

    //get files by vite
    const paths  = import.meta.glob('/src/posts/*.md', {eager:true}) //get all files

    for ( const path in paths){
        const file = paths[path] 
        const slug = path.split('/').at(-1)?.replace('.md','') //take only the name of the post as slug
        
        if(file && typeof file ==='object' && 'metadata' in file && slug){
            const metadata = file.metadata as Omit<Post,'slug'>
            const post = {...metadata, slug} satisfies Post
            post.published && posts.push(post)
        }

    }  

    if(!paths){
        throw error(500, 'Failed to load blog posts')
    }

    //TODO Limit the number the posts per page 
    posts = posts.sort((first,second) => new Date(second.date).getTime() - new Date(first.date).getTime()) 

    return posts
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}