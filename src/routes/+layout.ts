import type { LayoutLoad } from "./$types";

//Create html files at build time 
//For WebGl,always use OnMount
export const prerender = true

export const load : LayoutLoad = async ({url}) =>{
    return {
        url:url.pathname
    }
} 