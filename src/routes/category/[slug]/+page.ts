import type { Post } from "$lib/types"
import type { PageLoad } from "./$types"


export const load : PageLoad =  async ({fetch}) => {
   
    const posts : Post[] = []
    return { posts }
}