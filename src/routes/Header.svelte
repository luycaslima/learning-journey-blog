<script lang="ts">
  import { theme } from '$lib/theme';
  //import {Search} from 'lucide-svelte'
  import Toggle from './Toggle.svelte';
  import { page } from '$app/stores';

    
  //$: currentPath = $page.url.pathname  
  let isDark : boolean
  $ : isDark = $theme === 'dark' ? true : false
</script>


<!-- -->
<nav  class="w-full mx-auto z-20 fixed top-0 left-0 bg-ghostWhite dark:bg-newBlack transition-colors">
    <div class="flex items-center justify-between flex-wrap h-16 mx-auto max-w-[64rem] px-4 ">
        <a class="flex justify-center items-center gap-3" href="/">
            {#if isDark}
                <img src="/logo_dark_mode.svg" alt="home logo">
            {:else}
                <img src="/favicon.svg" alt="home logo">
            {/if}
            
            <p class="font-nippo text-4xl font-bold">L22L</p>
        </a>
    
        <div class="flex flex-row items-center gap-6">
            <!--TODO make the search bar functional  -->
            <!-- <div class="flex p-1 cursor-pointer">
                <Search width='{3}'  size='{24}' class='text-richBlackFogra dark:text-aliceBlue' />
                <input hidden class="rounded-md bg-richBlackFogra" type="search" value="" placeholder="Search...">
            </div> -->
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
            <Toggle/>
        </div>
        
    </div>
    
</nav>