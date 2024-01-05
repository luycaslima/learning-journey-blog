<script lang='ts'>
	import * as config from '$lib/config'
  import { theme } from '$lib/theme';
  import { Github, Instagram, RssIcon } from 'lucide-svelte';

  let isDark : boolean
  $ : isDark = $theme === 'dark' ? true : false
</script>

<!-- Footer TODO make the text color weaker-->
<footer class="mx-auto items-center  max-w-[64rem] w-full mt-8 px-4">
    <div class="flex justify-between border-solid w-full border-richBlackFogra dark:border-aliceBlue border-t-2 py-6 ">
        <p class="font-nippo text-xl "> {config.title} 
            &copy {new Date().getFullYear()}
        </p>
        <div class="flex gap-4">
            <!-- <a href="http://" target="_blank">
                <RssIcon size='{28}'  class='text-richBlackFogra dark:text-aliceBlue'/>
            </a> -->
            <a target=”_blank”  href="https://www.instagram.com/luycaslima/?hl=en">
                <Instagram size='{28}' class='text-richBlackFogra dark:text-aliceBlue' />
            </a>
            <a target=”_blank”  href="https://github.com/luycaslima">
                <Github size='{28}' class='text-richBlackFogra dark:text-aliceBlue' fill={isDark ? '#080808' : '#001021'} />
            </a>
        </div>
    </div>

</footer>
