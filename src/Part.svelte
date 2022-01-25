<script>
import save from './save-svg.js';
import { zoom } from './store';
    
export let x;
export let y;
export let mirror = false;
export let name = "Part.svg";

let svg;
let transform = undefined;
    
$: {
    console.log("PArt recalc" + x)
    transform = undefined;
    let translationX = mirror ? (-2*(x)) +5 : x;
    let translationY = y;
    
    if (mirror)
        transform = "scale(-1, 1)";

    if (translationX !== 0 || translationY !== 0)
        transform = (transform || "") + ' translate(' + translationX + ' ' + translationY + ')';
    transform = transform ? transform.trim() : undefined;
}
</script>

<g id={name} {transform} on:click={() => save(svg, name, $zoom)} bind:this={svg}>
    <slot />
</g>