<script lang="ts">
    import { onMount } from "svelte";

    export let type: 'js-enabled' | 'js-disabled' | undefined = undefined;

    let mounted: boolean = false;

    onMount(() => {
        mounted = true;
    });

</script>

<!-- We cannot use <noscript> here as we must use css to hide element that may do some weird stuff. . . -->

{#if type}
    {#if type == 'js-enabled'}
        {#if mounted}
            <slot />
        {/if}
    {:else if type == 'js-disabled'}
        {#if !mounted}
            <slot />
        {/if}
    {/if}
{:else}
    {#if mounted}
        <slot name="js-enabled"/>
    {:else}
        <slot name="js-disabled"/>
    {/if}
{/if}
