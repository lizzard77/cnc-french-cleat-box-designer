<script>
    import { thickness, cornerRadius, randAbstand, cutterDiameter } from './store';
    import Part from './Part.svelte';

    export let x = 0;
    export let y = 0;
    export let w = 0;
    export let h = 0;
    export let name = "Shelf";

    export let extCutOutline = '#000000';
    export let extCutFill = '#000000';

    let zapfenBreite = 2 * $thickness;
    let mittelteil = w - 2*zapfenBreite - 2*$cutterDiameter - $cornerRadius - 2 * $thickness - $randAbstand;    

    $: {
        zapfenBreite = 2 * $thickness;
        mittelteil = w - 2*zapfenBreite - 2*$cutterDiameter - $cornerRadius - 2 * $thickness - $randAbstand;    
    }
</script>

<Part {x} {y} {name}>
    <path d="
        M{$thickness},{0} 
        l{h},0
        
        l{$thickness},0
        l0,{zapfenBreite}
        l{-$thickness},0
        a {$cutterDiameter/2} {$cutterDiameter/2} 0 0 0 0 {$cutterDiameter}

        l0,{mittelteil}

        a {$cutterDiameter/2} {$cutterDiameter/2} 0 0 0 0 {$cutterDiameter}
        l{$thickness},0
        l0,{zapfenBreite}
        l{-$thickness},0
        
        l{-h},0
        
        l{-$thickness},0
        l0,{-zapfenBreite}
        l{$thickness},0
        a {$cutterDiameter/2} {$cutterDiameter/2} 0 0 0 0 {-$cutterDiameter}

        l0,{-mittelteil}

        a {$cutterDiameter/2} {$cutterDiameter/2} 0 0 0 0 {-$cutterDiameter}
        l{-$thickness},0
        l0,{-zapfenBreite}
        l{$thickness},0"  style="fill:{extCutFill};stroke-width:1px;stroke-color:{extCutOutline};" />
</Part>