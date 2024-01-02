<script lang='ts'>
    import type { PageData } from "./$types";
    //import * as config from '$lib/config'
    import { formatDate } from "$lib/utils";

    export let data : PageData
    $: posts  = data.posts
</script>


<svelte:head>
    <title>L22L</title>
</svelte:head>

<section class="h-full">
    <ul class=" h-full flex flex-col justify-center gap-12">
        {#each posts as post}
            <li class=" max-w-3xl flex flex-col">
                <a href={`/posts/${post.slug}`} class="text-4xl font-nippo font-bold transition-colors duration-200 hover:text-orangeRedCrayole">
                    {post.title}
                </a>
                <p class="text-coolBlue font-bold text-lg">{formatDate(post.date)}</p>
                <p class="mt-2 text-justify text-xl">{post.description}</p>
                <!-- <div class="flex gap-2">
                    {#each post.categories as  category}
                     <span >{category}</span>   
                    {/each}
                </div> -->
            </li>
        {/each}
    </ul>
    <!-- TODO put here the buttons to next pages -->
</section>