<script lang="ts">
  import { theme } from '$lib/theme';
  //import {Search} from 'lucide-svelte'
  import Toggle from './Toggle.svelte';
  //import { page } from '$app/stores';
  import { Menu } from 'lucide-svelte';


  let isOpen : boolean = false
    function toggleMobileMenu(){
        isOpen = !isOpen
        console.log(isOpen)
    }

    function resetMobileMenu(){
        isOpen = false
    }
  //$: currentPath = $page.url.pathname  
  let isDark : boolean
  $ : isDark = $theme === 'dark' ? true : false
</script>


<!-- -->
<header  class="w-full mx-auto z-20 fixed top-0 left-0 bg-ghostWhite dark:bg-newBlack transition-colors">
    <div class="flex flex-wrap items-center justify-between h-fit md:h-16 m-auto max-w-[64rem] p-4">
        <a class="flex justify-center md:items-center gap-3" href="/">
            {#if isDark}
                <img src="/logo_dark_mode.svg" alt="home logo">
            {:else}
                <img src="/favicon.svg" alt="home logo">
            {/if}
            
            <p class="hidden md:block font-nippo text-4xl font-bold">L22L</p>
        </a>
        
        <div class="flex gap-2 justify-center items-center">
            <span class="block md:hidden">
                <Toggle/>
            </span>
            <button on:click={toggleMobileMenu} class="md:hidden block "> 
                <Menu size='{24}' />
            </button>
        </div>

        <nav class={ (isOpen ? "block" : "hidden" )+ " md:flex md:flex-row gap-2 md:items-center w-full md:w-fit"}>
            <!--TODO make the search bar functional  -->
            <!-- <div class="flex p-1 cursor-pointer">
                <Search width='{3}'  size='{24}' class='text-richBlackFogra dark:text-aliceBlue' />
                <input hidden class="rounded-md bg-richBlackFogra" type="search" value="" placeholder="Search...">
            </div> -->
            <ul class="flex flex-col md:flex-row md:justify-between gap-2 md:gap-6 mt-4 md:mt-0 ">
                <li>
                    <a href="/projects" on:click={resetMobileMenu} class="font-bold text-lg transition-colors duration-200 hover:text-orangeRedCrayole">
                        <span class="link-underline link-underline-orange">
                            PROJECTS
                        </span>
                    </a>
                </li>
                <li>
                    <a href="/about" on:click={resetMobileMenu} class="font-bold text-lg  transition-colors duration-200 hover:text-orangeRedCrayole ">
                        <span class="link-underline link-underline-orange">
                            ABOUT
                        </span>
                    </a>
                </li>
               
            </ul>
            <div class="hidden md:block">
                <Toggle/>
            </div>
        </nav>
        
    </div>
    
</header>