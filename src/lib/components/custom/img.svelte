<script lang='ts'>
    //FOR LAZY LOADING IMAGES
    export let src:string
    export let alt:string
</script>

<img {src} {alt} loading='lazy' />