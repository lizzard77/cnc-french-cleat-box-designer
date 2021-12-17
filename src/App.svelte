<script>
    import { afterUpdate } from 'svelte';
    import { items, workspace, box, schlitze, randAbstand, thickness, cleatWidth, supportHeight, gap } from './store';
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

        $box.isClosed = $schlitze.h2 || $schlitze.v2 || $schlitze.v3 || $box.isClosed;   
        
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
        <h3><b>Box Dimensions (mm)</h3>
        <nobr>
        Width <input type=number bind:value={$box.width} min=0 max=500 /><br />
        Depth <input type=number bind:value={$box.depth} min={$randAbstand*2 + $thickness} max=500 /><br />
        Height <input type=number bind:value={$box.height} min=0 max=500 />
        </nobr>
    </div>
    <div>
        <h3><b>Base Dimensions (mm)</h3>            
        Material thickness <input type=number bind:value={$thickness} min=0 max=500 /><br />
        Cleat thickness <input type=number bind:value={$cleatWidth} min=0 max=500 /><br />
        Support part height <input type=number bind:value={$supportHeight} min=0 max=500 /><br />
        <i>(Set to 0 to disable)</i><br />
        Gap <input type=number bind:value={$gap} min=0 max=500 />

    </div>
    <div>
        <h3>Shelves</h3>
        <input type="checkbox" bind:checked={topIsShelf} /> top
        <input type="checkbox" bind:checked={bottomIsShelf} /> bottom<br />
        <input type="checkbox" bind:checked={frontIsShelf} /> front
        <input type="checkbox" bind:checked={backIsShelf} /> back
        
        <h3>Bars</h3>
        <input type="checkbox" bind:checked={topLeftBar} /> Back/top
        <input type="checkbox" bind:checked={topRightBar} /> Front/top<br />
        <input type="checkbox" bind:checked={botLeftBar} /> Back/bottom
        <input type="checkbox" bind:checked={botRightBar} /> Front/bottom
        
        <h3>Sides</h3>
        <input type="checkbox" bind:checked={$box.isClosed} /> closed sides<br />
        <i>(mandatory with front or top shelves)</i>
    </div>
    <div>
        <h3>Workspace Dimensions (mm)</h3>
        W <input type=number bind:value={$workspace.width} on:change={(e) => $workspace = { ...$workspace, width: e.target.value }} min=0 max=1000 />
        L <input type=number bind:value={$workspace.height} min=0 max=1000 />
    </div>
    <div>
        <h3>Download SVG</h3>
        <button on:click={ev => save(svg, "Workspace.svg")}>Download Workspace</button>
        <p><i>Click individual parts to download separate files</i></p>    
    </div>

    <div style="font-style: italic; font-size: smaller;">
        Open Source - <a href="https://github.com/lizzard77/cnc-french-cleat-box-designer/blob/master/LICENSE">MIT License</a><br />
        <a href="https://github.com/lizzard77/cnc-french-cleat-box-designer">Visit project on GitHub</a>
    </div>
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
