<script>
    import { box, thickness } from './store';    
    import save from './save-svg.js';

let svg;

    export let randAbstand = 7;    
    export let x = 0;
    export let y = 0;
</script>

<g transform="translate({x} {y})" on:click={() => save(svg, "Bar.svg")} bind:this={svg}>
    <path d="M{$thickness},{0} 
        l{$box.width},0
        l0,{randAbstand}

        l{$thickness},0
        l0,{$thickness*2}
        l{-$thickness},0

        l0,{randAbstand}
        l{-$box.width},0
        l0,{0, -randAbstand}

        l{-$thickness},0
        l0,{-$thickness*2}
        l{$thickness},0

        l0,{-randAbstand}
    "  style="fill:white;" />
</g>