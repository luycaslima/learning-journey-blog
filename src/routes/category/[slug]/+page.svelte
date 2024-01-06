<script lang='ts'>
    import type { PageData } from "./$types";

    import PostList from "../../PostList.svelte";

    export let data : PageData
    $: posts  = data.posts

</script>


<svelte:head>
    <title></title>
</svelte:head>


<section class="h-full flex gap-4 justify-between">
    WIP
    <!-- <PostList posts={posts} /> -->
</section>