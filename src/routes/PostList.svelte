<script lang="ts">
    import type { Post } from "$lib/types";
    import { formatDate } from "$lib/utils";
    import { ChevronsRight } from "lucide-svelte";

    export let posts: Post[]    
</script>

<ul class="h-full flex flex-col justify-center gap-8">
    {#each posts as post, i}
        <li class="mt-6  flex flex-col">
            <a href={`/posts/${post.slug}`} class="max-w-max text-4xl font-nippo font-bold transition-colors duration-200 hover:text-orangeRedCrayole">
                {post.title}
            </a>
            <p class="text-coolBlue font-bold text-lg">{formatDate(post.date)}</p>
            <p class="mt-2 text-justify text-xl">{post.description}</p>
             <div class="flex items-center justify-between ">
                <div class="flex gap-2">
                    {#each post.categories as category,i}
                     <span class="my-2 text-orangeRedCrayole ">
                        {category}
                        {#if i === 0 && i !== post.categories.length-1}
                        ,
                        {/if}
                    </span>
                    {/each}
                </div>
                <a class="mb-4 hover:bg-richBlackFogra dark:hover:bg-aliceBlue px-2 max-w-max rounded-sm  transition-colors duration-200" href={`/posts/${post.slug}`}> 
                    <ChevronsRight class='hover:text-ghostWhite text-richBlackFogra dark:hover:text-richBlackFogra dark:text-aliceBlue' size={32}/>
                </a>
            </div>
        </li>

        <!-- {#if i !== posts.length -1}
            <hr class="bg-richBlackFogra h-[3px]">
        {/if} -->
    {:else}
        <h2>No Posts for now! :( </h2>
    {/each}
    <!-- <aside class='sticky top-0 -right-16'>
        <nav class="h-full w-full">
            teste
        </nav>
    </aside> -->
</ul>