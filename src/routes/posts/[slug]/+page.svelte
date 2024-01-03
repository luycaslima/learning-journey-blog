<script lang='ts'>
  import type { Post } from "$lib/types";
  import { formatDate } from "$lib/utils";
    import type { PageData } from "./$types";

    export let data : PageData

    $: post = data.meta satisfies Post
</script>

<!-- SEO -->

<svelte:head>
    <title>{post.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:type" content={post.title} />
</svelte:head>

<article class="h-full">
    <!--Title-->
    <hgroup class="mt-6">
        <p class="text-coolBlue font-bold text-xl mb-2">Published at {formatDate(post.date)}</p>
        <h1>{post.title}</h1>
    </hgroup>

    <!-- Turn them into links <a href="/category/{category}>{category}</a> 
        so they point to a /category/[category] 
        page that shows the posts based on the name of the category?-->
    <div class="flex my-2 gap-4 text-lg text-orangeRedCrayole">
        {#each post.categories as category}
            <span>&num;{category}</span>
        {/each}
    </div>

    <!-- Post-->
    <div class="mt-8 text-justify">
        <svelte:component this={data.content} />
    </div>

</article>