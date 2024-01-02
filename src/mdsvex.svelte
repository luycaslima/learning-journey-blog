<script lang="ts">
    import {img} from '$lib/components/custom'
    export {img}

    //TODO make the same for each one
    // export let title :string
    // export let description :string
    // export let date : string
    // export let categories : string[]
    // export let published : boolean
    
    //Save imgs in static folder (WEBP for optm) and for using imgs in md -> ![Text](image.webp)
    //other options https://mdsvex.pngwn.io/docs/#options
</script>

<slot />