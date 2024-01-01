<script>
    import { MagnifyingGlass, Sun} from 'phosphor-svelte'
</script>


<!-- z-20 fixed top-0 left-0 -->
<nav  class="w-full mx-auto flex items-center justify-around flex-wrap px-12  bg-ghostWhite">
    <a href="/">
        <img src="/home.svg" alt="home logo">
    </a>

    <div class="flex flex-row gap-4">
        <div class="flex">
            <MagnifyingGlass size='{24}' />
            <input type="text">
        </div>
        <a href="/projects" class="font-nippo text-lg">PROJECTS</a>
        <a href="/about" class="font-nippo text-lg">ABOUT</a>
        <button>
            <Sun weight='bold' size='{24}'/>
        </button>
    </div>
    
</nav>