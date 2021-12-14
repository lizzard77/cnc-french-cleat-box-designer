<script>
    import { thickness } from './store';
    import save from './save-svg.js';

    let svg;

    let randAbstand = 7;
    export let x = 0;
    export let y = 0;
    export let h = 0;
    export let w = 0;

    export let pocketColor = '#7F7F7F';
    export let extCutOutline = '#000000';
    export let extCutFill = '#000000';
</script>

<g transform="translate({x} {y})" on:click={() => save(svg, "Shelf.svg")} bind:this={svg}>
    <path d="M{$thickness},{0} 
        l{w},0
        l0,{randAbstand+$thickness}

        l{$thickness},0
        l0,{$thickness*2}
        l{-$thickness},0

        l0,{h-2*(randAbstand+3*$thickness)}

        l{$thickness},0
        l0,{$thickness*2}
        l{-$thickness},0

        l0,{randAbstand+$thickness}
        l{-w},0
        l0,{-randAbstand-$thickness}

        l{-$thickness},0
        l0,{-$thickness*2}
        l{$thickness},0

        l0,{-h+2*(randAbstand+3*$thickness)}

        l{-$thickness},0
        l0,{-$thickness*2}
        l{$thickness},0

        l0,{-randAbstand-$thickness}
    "  style="fill:{extCutFill};stroke-width:1px;stroke-color:{extCutOutline};" />
</g>