<script lang="ts">
    import ScriptGate from "$components/ScriptGate.svelte";
    import SVG_Clock from "$components/svg/clock.svelte";

    let rain: boolean = false;

</script>

<style lang="scss">

    * {
        @apply font-segoe text-white;
    }

</style>

{#if rain}
    <img class="fixed top-0 left-0 w-screen h-screen z-10 pointer-events-none" src="/svg-library/svg/stylized-rain.svg" alt="Rain Overlay">
{/if}

<div class="w-full px-32 flex flex-col items-center gap-16 pb-32">

    <div class="w-full py-16">
        <span class="font-semibold text-3xl">
            <h1 class="font-bold text-6xl mb-2">
                SVG Library
            </h1>
            A bunch of random SVGs I've made.<br />
            Released under MIT license, use them however you want.<br />
            <span class="text-nowrap">~(￣▽￣)~*</span>
        </span>
    </div>
    
    <div class="grid grid-cols-2 grid-rows-2 gap-8 h-96 max-w-[48rem]">
        <img class="w-full h-full" src="/svg-library/svg/space-animated.svg" title="Space Animated" alt="Space Animated" />
        <div class="px-4 py-2 flex items-center justify-center font-semibold text-4xl">
            « Space Animated
        </div>
        <div class="px-4 py-2 flex items-center justify-center font-semibold text-4xl">
            Space Static »
        </div>
        <img class="w-full h-full" src="/svg-library/svg/space-static.svg" title="Space Static" alt="Space Static" />
    </div>

    <div class="h-96 max-w-[48rem]">
        <ScriptGate type="js-enabled">
            <SVG_Clock class="w-full h-full" />
        </ScriptGate>
        <ScriptGate type="js-disabled">
            <img class="w-full h-full" src="/svg-library/svg/clock.svg" title="Clock" alt="Clock">
        </ScriptGate>
    </div>

    <div class="max-w-[32rem]">
        <img class="w-full aspect-video border-2 border-white" src="/svg-library/svg/bounce.svg" title="Bounce" alt="Bounce" />
    </div>

    <ScriptGate type="js-enabled">
        <button
            class="bg-white !text-black text-2xl font-bold px-4 py-2 rounded-lg"
            on:click={() => rain = !rain}
        >
            Toggle Rain
        </button>
    </ScriptGate>

</div>
