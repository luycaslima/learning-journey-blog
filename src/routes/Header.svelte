<script lang="ts">
    import {Search ,SunMedium} from 'lucide-svelte'
</script>


<!-- -->
<nav  class="w-full mx-auto z-20 fixed top-0 left-0 bg-ghostWhite">
    <div class="flex items-center justify-between flex-wrap px-4 mx-auto w-4/6">
        <a href="/">
            <img src="/home.svg" alt="home logo">
        </a>
    
        <div class="flex flex-row items-center gap-6">
            <div class="flex p-1 cursor-pointer">
                <Search width='{3}'  size='{24}' color='#001021'/>
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
            <button>
                <SunMedium size='{24}' />
            </button>
        </div>
        
    </div>
    
</nav>