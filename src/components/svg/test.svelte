<script lang="ts">

    let _class: string = '';
    export { _class as class };
    
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class={_class}>

    <polyline fill="orange">
        <animate
            attributeName="points"
            values="
                32 0, 0 32, 32 64, 64 32, 32 0;
                32 0, 64 32, 32 64, 0 32, 32 0;
                32 0, 0 32, 32 64, 64 32, 32 0
            "
            dur="10s"
            calcMode="spline"
            keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
            repeatCount="indefinite"
        />
        <animate
            attributeName="fill"
            values="orange;red;red;orange"
            dur="10s"
            calcMode="discrete"
            repeatCount="indefinite"
        />
    </polyline>

</svg>
