<script lang="ts">

    import "../app.css"
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";


</script>


<div class="grid ">
    <Header />
    
    <main class=" w-full mx-auto px-12">
        <slot/>
        <Footer />
    </main>

</div>