<script>
    import { box, thickness, schlitze, cornerRadius, cleatWidth, cleatConnectionHeight, randAbstand, supportHeight, supportDepth, cutterDiameter } from './store';
    import Part from './Part.svelte';

    export let mirror = false;    
    export let x = 0;
    export let y = 0;
    export let name = "Side";
    let supportPath = "";
        
    export let pocketColor = '#7F7F7F';
    export let extCutOutline = '#000000';
    export let extCutFill = '#000000';

    let startX = Math.max(0, $supportDepth - $cleatWidth);

    $: if ($supportHeight && $supportDepth)
    {
        supportPath = `l -${$supportDepth},0 l 0,-${$supportHeight} l ${$supportDepth-$cutterDiameter},0 a ${$cutterDiameter/2} ${$cutterDiameter/2} 0 0 0 ${$cutterDiameter} 0`;        
        startX = Math.max(0, $supportDepth - $cleatWidth);
    } else 
    { 
        supportPath = ""; 
        startX = 0;
    }    
</script>

<Part {x} {y} {mirror} {name}>
    {#if ($box.isClosed)}
    <path d="M{startX},0  
        l{$cleatWidth},0 
        l{$box.depth-$cornerRadius},0 
        a{$cornerRadius},{$cornerRadius} 0 0 1 {$cornerRadius},{$cornerRadius} 
        l0,{$box.height-$cornerRadius} 
        l-{$box.depth},0 
        {supportPath}
        l0,-{$box.height-$cleatConnectionHeight-$supportHeight-8} 
        l 2 -2
        a {$cutterDiameter/2} {$cutterDiameter/2} 0 0 0 -{$cutterDiameter} -{$cutterDiameter/2}
        l -2 2
        l-{$cleatWidth-$cutterDiameter},{$cleatWidth-$cutterDiameter} 
        L {startX},0"
        style="fill:{extCutFill};stroke-width:1px;stroke-color:{extCutOutline};" />
    {:else}
    <path d="M{startX},0 
        l{$cleatWidth},0 
        l{$randAbstand*2 + $thickness - $cornerRadius},0 
        a{$cornerRadius},{$cornerRadius} 0 0 1 {$cornerRadius},{$cornerRadius} 
        l0,{$box.height-$cornerRadius-2*$randAbstand-$thickness} 
        l{$box.depth - $randAbstand*2 - $thickness},0 
        l0,{$randAbstand*2+$thickness}
        l{-$box.depth},0
        {supportPath}
        l0,-{$box.height-$cleatConnectionHeight-$supportHeight-8} 
        l 2 -2
        a 3 3 0 0 0 -7 -5
        l -2 2
        l-{$cleatWidth-7},{$cleatWidth-5} 
        L {startX},0" 
        style="fill:{extCutFill};stroke-width:1px;stroke-color:{extCutOutline};" />
    {/if}

    {#if ($schlitze.h1)}
    <rect x={startX+$cleatWidth+$randAbstand+$thickness} y={$cornerRadius} width={$thickness*2} height={$thickness} style="fill:{pocketColor}; stroke-width: 0;" />
    {/if}
    {#if ($schlitze.h2)}
    <rect x={startX+$cleatWidth+$box.depth-$randAbstand-$thickness*3} y={$cornerRadius} width={$thickness*2} height={$thickness} style="fill:{pocketColor};stroke-width: 0;" />
    {/if}
    {#if ($schlitze.h3)}
    <rect x={startX+$cleatWidth+$box.depth-$randAbstand-$thickness*3} y={$box.height-$randAbstand-$thickness} width={$thickness*2} height={$thickness} style="fill:{pocketColor};stroke-width: 0;" />
    {/if}
    {#if ($schlitze.h4)}
    <rect x={startX+$cleatWidth+$randAbstand+$thickness} y={$box.height-$randAbstand-$thickness} width={$thickness*2} height={$thickness} style="fill:{pocketColor};stroke-width: 0;" />
    {/if}
    
    {#if ($schlitze.v1)}
    <rect x={startX+$cleatWidth+$randAbstand} y={$cornerRadius+$thickness} width={$thickness} height={$thickness*2} style="fill:{pocketColor};stroke-width: 0;" />
    {/if}
    {#if ($schlitze.v2)}
    <rect x={startX+$cleatWidth+$box.depth-$thickness-$randAbstand} y={$cornerRadius+$thickness} width={$thickness} height={$thickness*2} style="fill:{pocketColor};stroke-width: 0;" />
    {/if}
    {#if ($schlitze.v3)}
    <rect x={startX+$cleatWidth+$box.depth-$thickness-$randAbstand} y={$box.height-$randAbstand-$thickness*3} width={$thickness} height={$thickness*2} style="fill:{pocketColor};stroke-width: 0;" />
    {/if}
    {#if ($schlitze.v4)}
    <rect x={startX+$cleatWidth+$randAbstand} y={$box.height-$randAbstand-$thickness*2-$thickness} width={$thickness} height={$thickness*2} style="fill:{pocketColor};stroke-width: 0;" />
    {/if}    
</Part>