<script lang='ts'>
    import type { PageData } from "./$types";

    import PostList from "./PostList.svelte";

    export let data : PageData
    $: posts  = data.posts

</script>


<svelte:head>
    <title>L22L</title>
</svelte:head>


<!--To list all categories when fetch posts get which have more than 0 for each cartegori and draw only that ones-->
<section class="h-full flex gap-4 justify-between">
    <PostList posts={posts} />
    <!-- TODO put here the buttons to next pages -->
</section>
