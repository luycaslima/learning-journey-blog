import type { Post } from "$lib/types"
import type { PageLoad } from "./$types"

export const prerender = false
export const load : PageLoad =  async () => {
   
    const posts : Post[] = []
    return { posts }
}