import type { LayoutLoad } from "./$types";

//Create html files at build time 
//TODO check how to work with the WEBGL
export const prerender = true

export const load : LayoutLoad = async ({url}) =>{
    return {
        url:url.pathname
    }
} 