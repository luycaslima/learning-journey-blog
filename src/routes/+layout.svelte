<script lang="ts">
    import { fade } from "svelte/transition";
    import type { LayoutData } from "./$types";
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import "../app.css"

    export let data : LayoutData
</script>

<!-- The delay is required for the entering transition to not overlap with the leaving transition if you use both or transition:fly which is the same thing. -->
<div class="flex flex-col h-full">
    <Header />
    {#key data.url}
        <main
            in:fade
            class="md:mt-20 flex-1 max-w-[64rem] w-full m-auto p-4">
            <slot />
        </main>
    {/key}
    <Footer />
</div>