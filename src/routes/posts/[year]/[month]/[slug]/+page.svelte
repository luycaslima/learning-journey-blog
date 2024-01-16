<script lang='ts'>
  import type { Post } from "$lib/types";
  import { formatDate } from "$lib/utils";
  import type { PageData } from "./$types";

    export let data : PageData
    let post : Post;
    $: post = data.meta satisfies Post
    
    function removeSpaces(heading :string) : string{
      const lowerCase = heading.toLowerCase()
      const id = lowerCase.replace(/\s/g,'-')
      const filterPunctuation = id.replace("?",'').replace(",","").replace("!","").replace(".","")
      return filterPunctuation
    }

    $: innerWidth = 0;
    //console.log(innerWidth)
    function handleAnchorClick (element : string ) {
		const anchor = document.getElementById(element)
		window.scrollTo({
			top: anchor?.offsetTop,
			behavior: 'smooth'
	    })
    }
</script>

<svelte:window bind:innerWidth />

<svelte:head>
    <title>{post.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:type" content={post.title} />
</svelte:head>



<div class={ (innerWidth < 768 ? " " : "post-grid") +" relative gap-2 box-border wrapper"}>
    <!--Title-->
    <header class="mt-6 h-fit">
      <hgroup>
        <p class="text-coolBlue font-bold text-xl mb-2">Published at {formatDate(post.date)}</p>
        <div class=" xl:text-center flex items-center justify-center gap-8 my-4">      
            <h1 class="">{post.title}</h1>
            <hr class="flex-grow h-[3px]  bg-richBlackFogra dark:bg-aliceBlue">
        </div>
          <!--TODO Turn them into links <a href="/category/{category}>{category}</a> 
        so they point to a /category/[category] 
        page that shows the posts based on the name of the category?-->
        <div class="flex my-2 gap-4 text-lg text-orangeRedCrayole">
          {#each post.categories as category}
              <span>&num;{category}</span>
          {/each}
        </div>
      </hgroup>
    </header>
  
    <!--Summary-->
    <!--TODO sort the headings by the which are children of it own categories-->
    {#if post.headings.length !== 0}
      <aside class={ (innerWidth < 1300 ? "toc" :"side") +" relative"}>
        <nav class="md:sticky max-h-full w-fit h-fit md:top-[12%] ml-8">
          <h3 class="font-bold text-2xl mt-0 mb-4">Summary</h3>
          <ul>
              {#each post.headings as heading} <!--TODO insert a number after the id of heading to not repeat  and treat the nesting-->
                  <li class=" transition-colors duration-200 hover:text-orangeRedCrayole list-decimal text-xl mb-2">
                    <a class="link-underline link-underline-orange" 
                      on:click|preventDefault={()=>{handleAnchorClick(removeSpaces(heading.title))}} 
                      href={'#'+removeSpaces(heading.title)}>
                      {heading.title}
                    </a>
                  </li>
              {/each}
          </ul>
        </nav>
      </aside>
    {/if}
    
  
  <!-- Post-->
  <main class="content mt-2 text-justify h-full">
    <svelte:component this={data.content} />
  </main>
     
</div>

<style lang="postcss">
  .wrapper :global(img){
    @apply md:w-1/2;
  }
  .wrapper :global(p){
    @apply my-4;
  }
  .wrapper :global(ul){
    @apply list-disc ml-4 min-w-32;
  }

  .side {
    grid-area: side;
  }
  .toc{
    grid-area:toc;
  }

  .content {
    grid-area: content;
  }

  .post-grid{
    display: grid;
    grid-template: 
    "header side"
    "toc side"
    "content side"/100% 0;
  }
</style>