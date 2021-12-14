<script>
    import { afterUpdate } from 'svelte';
    import { items, workspace, box, schlitze, randAbstand, thickness, cleatWidth } from './store';
	import save from './save-svg.js';

    let svg;
    
    let topIsShelf = true;
    let bottomIsShelf = true;
    let frontIsShelf = true;
    let backIsShelf = true;

    let topLeftBar = false;
    let topRightBar = false;
    let botLeftBar = false;
    let botRightBar = false;

    $: {
        if ($box.height < 100)
        {
            topIsShelf = false;
            frontIsShelf = false;
            backIsShelf = false;
        }

        if ($box.depth < 100)
        {
            topIsShelf = false;
            bottomIsShelf = false;
        }

        if ($box.depth < 50)
        {
            frontIsShelf = false;
        }
        
        items.addSides();
        if (topIsShelf)
        {
            $schlitze.h1 = true;
            $schlitze.h2 = true;
            items.addShelf($box.depth, $box.width, "top", false);
        } 

        if (bottomIsShelf)
        {
            $schlitze.h3 = true;
            $schlitze.h4 = true;
            items.addShelf($box.width, $box.depth, "bottom", false);
        }

        if (frontIsShelf)
        {
            $schlitze.v2 = true;
            $schlitze.v3 = true;
            items.addShelf($box.height, $box.width, "front", true);
        }

        if (backIsShelf)
        {
            $schlitze.v1 = true;
            $schlitze.v4 = true;
            items.addShelf($box.height, $box.width, "back", true);
        }

        if (topLeftBar)
        {
            $schlitze.v1= true;
            items.addBar($box.width, "tl");
        }

        if (topRightBar)
        {
            $schlitze.v2= true;
            items.addBar($box.width, "tr");
        }

        if (botLeftBar)
        {
            $schlitze.v4 = true;
            items.addBar($box.width, "br");
        }

        if (botRightBar)
        {
            if ($box.isClosed)
                $schlitze.v3 = true;
            else 
                $schlitze.h3 = true;
            items.addBar($box.width, "bl");
        }

        $box.isClosed = $schlitze.h2 || $schlitze.v2 || $schlitze.h1 || $schlitze.v3 || $box.isClosed;   
        
        items.getDimensions();
        items.reposition();
    }

    afterUpdate(() => {
		items.getDimensions();
        items.reposition();
	});
</script>

<div style="display: flex; flex-direction: column; margin: 1em;">
    <div>
        Workspace<br /> 
        W <input type=number bind:value={$workspace.width} on:change={(e) => $workspace = { ...$workspace, width: e.target.value }} min=0 max=1000 />
        L <input type=number bind:value={$workspace.height} min=0 max=1000 />
    </div>
    <div>
        Dimensions<br />
        <nobr>
        W <input type=number bind:value={$box.width} min=0 max=500 />
        D <input type=number bind:value={$box.depth} min={$randAbstand*2 + $thickness} max=500 />
        H <input type=number bind:value={$box.height} min=0 max=500 />
        Cleat <input type=number bind:value={$cleatWidth} min=0 max=500 />
        </nobr>
    </div>
    <div>
        Shelves<br/>
        <input type="checkbox" bind:checked={topIsShelf} /> top
        <input type="checkbox" bind:checked={bottomIsShelf} /> bottom
        <input type="checkbox" bind:checked={frontIsShelf} /> front
        <input type="checkbox" bind:checked={backIsShelf} /> back
        <br />
        Bars<br/>
        <input type="checkbox" bind:checked={topLeftBar} /> tl
        <input type="checkbox" bind:checked={topRightBar} /> tr
        <input type="checkbox" bind:checked={botLeftBar} /> bl
        <input type="checkbox" bind:checked={botRightBar} /> br
        <br />
        <input type="checkbox" bind:checked={$box.isClosed} /> closed sides
    </div>

    <button on:click={ev => save(svg, "Workspace.svg")}>Download Workspace</button>
    <p><i>Click individual parts to download separate files</i></p>    
</div>

<div id="workspaces">
    <svg bind:this={svg} width="{$workspace.width}" height="{$workspace.height}" fill-rule="evenodd" style="border: 1px solid silver; fill:none;stroke:black;stroke-width:0.5px;">
    {#each $items as item}
    <g id={item.name}>
        <svelte:component this={item.component} name={item.name} {...item.props} x={item.x || 0} y={item.y || 0} />
    </g>
    {/each}
    </svg>
</div>

<style>
	:global(body) {
		display: flex;
		justify-content: top;
		align-items: top;
		flex-direction: row;
	}

    #workspaces {
        height: 90%;
        display: flex;
		flex-direction: row;
        flex-wrap: wrap;
        align-items: top;
    }
</style>
