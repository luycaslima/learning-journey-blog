<script lang="ts">

    import "../app.css"
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";


</script>


<div class="flex flex-col h-full">
    <Header />
    
    <main class="mt-20 flex-1 w-4/6 m-auto py-4">
        <slot />
    </main>
    <Footer />
</div>