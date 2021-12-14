<script>
    import { thickness, cornerRadius, randAbstand } from './store';
	import save from './save-svg.js';

    let svg;

    export let x = 0;
    export let y = 0;
    export let w = 0;
    export let h = 0;

    export let pocketColor = '#7F7F7F';
    export let extCutOutline = '#000000';
    export let extCutFill = '#000000';
</script>

<g transform="translate({x} {y})" on:click={() => save(svg, "VerticalShelf.svg")} bind:this={svg}>
    <path d="M{$thickness},{0} 
        l{h},0
        
        l{$thickness},0
        l0,{$thickness*2}
        l{-$thickness},0

        l0,{w-6*$thickness-$cornerRadius-2*$randAbstand}

        l{$thickness},0
        l0,{$thickness*2}
        l{-$thickness},0

        l{-h},0
        
        l{-$thickness},0
        l0,{-$thickness*2}
        l{$thickness},0

        l0,{-w+(6*$thickness+$cornerRadius+2*$randAbstand)}

        l{-$thickness},0
        l0,{-$thickness*2}
        l{$thickness},0

        
    "  style="fill:{extCutFill};stroke-width:1px;stroke-color:{extCutOutline};" />
</g>