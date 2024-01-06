<script lang="ts">
  import { onMount } from "svelte";

  export let screenHeight : number;
  export let screenWidth : number;
  export let webglProgramCallback : () => void | null 

  export let view : HTMLCanvasElement;

  onMount(() => {
    // if(webglProgramCallback !== null){
    //   webglProgramCallback()
    // }
  });

</script>

<!-- 
<svelte:window on:resize={ () => {Game.resizeHandler(screenWidth,screenHeight)} } /> -->

<canvas bind:this={view} />

