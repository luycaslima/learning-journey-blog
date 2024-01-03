<script lang="ts">
    import {Search ,SunMedium} from 'lucide-svelte'
</script>


<!-- -->
<nav  class="w-full mx-auto z-20 fixed top-0 left-0 bg-ghostWhite ">
    <div class="flex items-center justify-between flex-wrap h-16 mx-auto w-2/4">
        <a class="flex justify-center items-center gap-3" href="/">
            <img src="/favicon.svg" alt="home logo">
            <p class="font-nippo text-4xl font-bold">L22L</p>
        </a>
    
        <div class="flex flex-row items-center gap-6">
            <div class="flex p-1 cursor-pointer">
                <Search width='{3}'  size='{24}' class='text-richBlackFogra' />
                <input hidden class="rounded-md bg-richBlackFogra" type="search" value="" placeholder="Search...">
            </div>
            <a href="/projects" class="font-bold text-lg transition-colors duration-200 hover:text-orangeRedCrayole">
                <span class="link-underline link-underline-orange">
                    PROJECTS
                </span>
            </a>
            <a href="/about" class="font-bold text-lg  transition-colors duration-200 hover:text-orangeRedCrayole ">
                <span class="link-underline link-underline-orange">
                    ABOUT
                </span>
            </a>
            <button class="px-2">
                <SunMedium class='text-richBlackFogra' size='{24}' />
            </button>
        </div>
        
    </div>
    
</nav>