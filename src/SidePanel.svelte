<script>
    import save from './save-svg.js';
    import { box, thickness, schlitze, cornerRadius, cleatWidth, cleatConnectionHeight, randAbstand } from './store';

    export let mirror = false;    
    export let x = 0;
    export let y = 0;
    let svg;

    export let pocketColor = '#7F7F7F';
    export let extCutOutline = '#000000';
    export let extCutFill = '#000000';
</script>

<g transform="translate({mirror ? x*2-5 : x} {y})" on:click={() => save(svg, "SidePanel.svg")} bind:this={svg}>
    <g transform="{mirror ? 'scale(-1, 1)' : ''}">
        {#if ($box.isClosed)}
        <path d="M0,0  
            l{$cleatWidth},0 
            l{$box.depth-$cornerRadius},0 
            a{$cornerRadius},{$cornerRadius} 0 0 1 {$cornerRadius},{$cornerRadius} 
            l0,{$box.height-$cornerRadius} 
            l-{$box.depth},0 
            l0,-{$box.height-$cleatConnectionHeight} 
            l-{$cleatWidth},{$cleatWidth} 
            l0,-{$cleatWidth + $cleatConnectionHeight}" style="fill:{extCutFill};stroke-width:1px;stroke-color:{extCutOutline};" />
        {:else}
        <path d="M0,0 
            l{$cleatWidth},0 
            l{$randAbstand*2 + $thickness - $cornerRadius},0 
            a{$cornerRadius},{$cornerRadius} 0 0 1 {$cornerRadius},{$cornerRadius} 
            l0,{$box.height-$cornerRadius-2*$randAbstand-$thickness} 
            l{$box.depth - $randAbstand*2 - $thickness},0 
            l0,{$randAbstand*2+$thickness}
            l{-$box.depth},0
            l0,-{$box.height-$cleatConnectionHeight} 
            l-{$cleatWidth},{$cleatWidth} 
            l0,-{$cleatWidth + $cleatConnectionHeight}" style="fill:{extCutFill};stroke-width:1px;stroke-color:{extCutOutline};" />
        {/if}

        {#if ($schlitze.h1)}
        <rect x={$cleatWidth+$randAbstand+$thickness} y={$cleatConnectionHeight+$randAbstand} width={$thickness*2} height={$thickness} style="fill:{pocketColor}; stroke-width: 0;" />
        {/if}
        {#if ($schlitze.h2)}
        <rect x={$cleatWidth+$box.depth-$randAbstand-$thickness*3} y={$cleatConnectionHeight+$randAbstand} width={$thickness*2} height={$thickness} style="fill:{pocketColor};stroke-width: 0;" />
        {/if}
        {#if ($schlitze.h3)}
        <rect x={$cleatWidth+$box.depth-$randAbstand-$thickness*3} y={$box.height-$randAbstand-$thickness} width={$thickness*2} height={$thickness} style="fill:{pocketColor};stroke-width: 0;" />
        {/if}
        {#if ($schlitze.h4)}
        <rect x={$cleatWidth+$randAbstand+$thickness} y={$box.height-$randAbstand-$thickness} width={$thickness*2} height={$thickness} style="fill:{pocketColor};stroke-width: 0;" />
        {/if}
        
        {#if ($schlitze.v1)}
        <rect x={$cleatWidth+$randAbstand} y={$cleatConnectionHeight+$randAbstand+$thickness} width={$thickness} height={$thickness*2} style="fill:{pocketColor};stroke-width: 0;" />
        {/if}
        {#if ($schlitze.v2)}
        <rect x={$cleatWidth+$box.depth-$thickness-$randAbstand} y={$cleatConnectionHeight+$randAbstand+$thickness} width={$thickness} height={$thickness*2} style="fill:{pocketColor};stroke-width: 0;" />
        {/if}
        {#if ($schlitze.v3)}
        <rect x={$cleatWidth+$box.depth-$thickness-$randAbstand} y={$box.height-$randAbstand-$thickness*3} width={$thickness} height={$thickness*2} style="fill:{pocketColor};stroke-width: 0;" />
        {/if}
        {#if ($schlitze.v4)}
        <rect x={$cleatWidth+$randAbstand} y={$box.height-$randAbstand-$thickness*2-$thickness} width={$thickness} height={$thickness*2} style="fill:{pocketColor};stroke-width: 0;" />
        {/if}
    </g>
</g>
