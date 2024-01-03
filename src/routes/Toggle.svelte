<script lang='ts'>
  import { theme, toggleTheme } from "$lib/theme";
  import { Moon, SunMedium } from "lucide-svelte";
  import { fly } from "svelte/transition";

    


</script>

<button on:click={toggleTheme} aria-label="Toggle Theme" class="px-2">
    {#if $theme ==='dark'}
        <div in:fly={{ y:10 }}>
            <SunMedium class='text-richBlackFogra dark:text-aliceBlue' size='{24}' />
        </div>
    
    {:else}
    <div in:fly={{ y: -10 }}>
        <Moon class='text-richBlackFogra dark:text-aliceBlue' size='{24}' />
    </div>
    {/if}
</button>