<script lang="ts">
    import { onDestroy, onMount } from "svelte";

    let _class: string = '';
    export { _class as class };



    export let date: Date | undefined = undefined;
    let displayDate: Date = date ?? new Date();
    $: if(date) {
        displayDate = date;
    }
    function updateDate(): void {
        if(!date) {
            displayDate = new Date();
        }
    }

    let timer: number = -1;

    onMount(() => {
        updateDate();
        timer = setTimeout(() => {
            // TODO: Align interval with second.
            timer = setInterval(() => updateDate(), 1000);
            updateDate();
        }, 1000 - new Date().getMilliseconds());
    });

    onDestroy(() => {
        clearTimeout(timer);
        clearInterval(timer);
    });

</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class={_class}>

    <!-- Clock numbers -->
    <style>

        text {
            fill: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight: 400;
            text-anchor: middle;
            alignment-baseline: middle;
        }

    </style>
    <text x="45.5" y="9.61731409782016"   font-size="8">1</text>
    <text x="55.38268590217984" y="19.5"  font-size="8">2</text>
    <text x="59" y="33"                   font-size="8">3</text>
    <text x="55.382685902179844" y="46.5" font-size="8">4</text>
    <text x="45.5" y="56.382685902179844" font-size="8">5</text>
    <text x="32" y="60"                   font-size="8">6</text>
    <text x="18.5" y="56.382685902179844" font-size="8">7</text>
    <text x="8.617314097820156" y="46.5"  font-size="8">8</text>
    <text x="5" y="33"                    font-size="8">9</text>
    <text x="8.61731409782016" y="19.5"   font-size="7.5">10</text>
    <text x="18.5" y="9.617314097820163"  font-size="7.5">11</text>
    <text x="32" y="6"                    font-size="7.5">12</text>

    <g transform="translate(32 32)">
        <!-- Clock second hand -->
        <line x1="0" x2="0" y1="-20" y2="0" stroke="white" stroke-width="0.5" stroke-linecap="round" transform="rotate({displayDate.getSeconds() * 6})" />
        <!-- Clock second dots-->
        <circle r="21" fill="transparent" stroke="white" stroke-width="0.3" stroke-dasharray="0.5 1.7" stroke-dashoffset="0.3" />
        <!-- Clock minute hand -->
        <line x1="0" x2="0" y1="-20" y2="0" stroke="white" stroke-width="0.8" stroke-linecap="round" transform="rotate({(displayDate.getSeconds() / 60 + displayDate.getMinutes()) * 6})" />
        <!-- Clock hour hand -->
        <line x1="0" x2="0" y1="-15" y2="0" stroke="white" stroke-width="1.2" stroke-linecap="round" transform="rotate({(displayDate.getMinutes() / 60 + displayDate.getHours()) * 30})" />
        <!-- Clock hour dots -->
        <!-- TODO -->
        <!-- <circle r="21" fill="transparent" stroke="white" stroke-width="1" stroke-dasharray="4.5" /> -->
    </g>

</svg>
