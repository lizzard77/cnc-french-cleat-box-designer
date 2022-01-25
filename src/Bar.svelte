<script>
    import { box, thickness, cutterDiameter } from './store';    
    import Part from './Part.svelte';

    export let randAbstand = 7;    
    export let x = 0;
    export let y = 0;
    export let name = "Bar";

    export let extCutOutline = '#000000';
    export let extCutFill = '#000000';
</script>

<Part {x} {y} {name}>
    <path d="M{$thickness},{0} 
        l{$box.width},0
        l0,{randAbstand}

        a {$cutterDiameter/2} {$cutterDiameter/2} 0 0 0 0 {$cutterDiameter}
        l{$thickness},0
        l0,{$thickness*2}
        l{-$thickness},0
        a {$cutterDiameter/2} {$cutterDiameter/2} 0 0 0 0 {$cutterDiameter}

        l0,{randAbstand}
        l{-$box.width},0
        l0,{0, -randAbstand}

        a {$cutterDiameter/2} {$cutterDiameter/2} 0 0 0 0 {-$cutterDiameter}
        l{-$thickness},0
        l0,{-$thickness*2}
        l{$thickness},0
        a {$cutterDiameter/2} {$cutterDiameter/2} 0 0 0 0 {-$cutterDiameter}

        l0,{-randAbstand}"  style="fill:{extCutFill};stroke-width:1px;stroke-color:{extCutOutline};" />
</Part>