<script lang="ts">
    import { page } from '$app/stores'
</script>

<section class=" h-full flex">
    <div class="flex flex-col items-center justify-center m-auto gap-2">
        <h1 >{$page.status}</h1>
        <h2 >{$page.error?.message}</h2>
    </div>
</section>