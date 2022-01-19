<script>
    import { thickness, cutterDiameter, randAbstand } from './store';
    import save from './save-svg.js';

    let svg;

    export let x = 0;
    export let y = 0;
    export let h = 0;
    export let w = 0;

    export let extCutOutline = '#000000';
    export let extCutFill = '#000000';

    let zapfenBreite = 2 * $thickness;
    let schenkel = $randAbstand + $thickness - $cutterDiameter;
    let mittelteil = h - 2*schenkel - 2*zapfenBreite - 4*$cutterDiameter;    
    
    $: {
        zapfenBreite = 2 * $thickness;
        schenkel = $randAbstand + $thickness - $cutterDiameter;
        mittelteil = h - 2*schenkel - 2*zapfenBreite - 4*$cutterDiameter;    
    }
</script>

<g transform="translate({x} {y})" on:click={() => save(svg, "Shelf.svg")} bind:this={svg}>
    <path d="
        m{$thickness},0
        l{w},0

        l0,{schenkel} 

        a {$cutterDiameter/2} {$cutterDiameter/2} 0 0 0 0 {$cutterDiameter}
        l{$thickness},0
        l0,{zapfenBreite}
        l{-$thickness},0
        a {$cutterDiameter/2} {$cutterDiameter/2} 0 0 0 0 {$cutterDiameter}

        l0,{mittelteil}

        a {$cutterDiameter/2} {$cutterDiameter/2} 0 0 0 0 {$cutterDiameter}
        l{$thickness},0
        l0,{zapfenBreite}
        l{-$thickness},0
        a {$cutterDiameter/2} {$cutterDiameter/2} 0 0 0 0 {$cutterDiameter}

        l0,{schenkel}        
        l{-w},0
        l0,{-schenkel}

        a {$cutterDiameter/2} {$cutterDiameter/2} 0 0 0 0 {-$cutterDiameter}
        l{-$thickness},0
        l0,{-zapfenBreite}
        l{$thickness},0
        a {$cutterDiameter/2} {$cutterDiameter/2} 0 0 0 0 {-$cutterDiameter}

        l0,{-mittelteil}

        a {$cutterDiameter/2} {$cutterDiameter/2} 0 0 0 0 {-$cutterDiameter}
        l{-$thickness},0
        l0,{-zapfenBreite}
        l{$thickness},0
        a {$cutterDiameter/2} {$cutterDiameter/2} 0 0 0 0 {-$cutterDiameter}

        l0,{-schenkel}
    "  style="fill:{extCutFill};stroke-width:1px;stroke-color:{extCutOutline};" />
</g>