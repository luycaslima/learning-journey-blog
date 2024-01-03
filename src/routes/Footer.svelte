<script lang='ts'>
	import * as config from '$lib/config'
  import { Github, Instagram } from 'lucide-svelte';
</script>

<!-- Footer TODO make the text color weaker-->
<footer class="mx-auto items-center  w-2/4 mt-8 ">
    <div class="flex justify-between border-solid w-full border-richBlackFogra border-t-2 py-6 ">
        <p class="font-nippo text-xl "> {config.title} 
            &copy {new Date().getFullYear()}
        </p>
        <div class="flex gap-4">
            <a target=”_blank”  href="https://www.instagram.com/luycaslima/?hl=en">
                <Instagram size='{28}' class='text-richBlackFogra' />
            </a>
            <a target=”_blank”  href="https://github.com/luycaslima">
                <Github size='{28}' class='text-richBlackFogra' fill='#001021' />
            </a>
        </div>
    </div>

</footer>
