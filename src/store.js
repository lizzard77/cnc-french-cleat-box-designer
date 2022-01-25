import { writable, derived, get } from 'svelte/store';
import SidePanel from './SidePanel.svelte';
import Shelf from './Shelf.svelte';
import VerticalShelf from './VerticalShelf.svelte';
import Bar from './Bar.svelte';

export const thickness = writable(9);
export const box = writable({ width: 100, height: 150, depth: 100, isClosed: true });
export const cornerRadius = writable(20);
export const cleatWidth = writable(18);
export const cleatConnectionHeight = writable(20);    
export const randAbstand = writable(7);
export const supportHeight = writable(20);
export const supportDepth = writable(18);
export const gap = writable(5);
export const cutterDiameter = writable(6);
export const zoom = writable(3);

export const  schlitze = writable({
        h1: false,
        h2: false,
        h3: false,
        h4: false,
        v1: false,
        v2: false,
        v3: false,
        v4: false
    });


function createWorkspace()
{
    const { subscribe, set, update } = writable({ width: 600, height: 700 });
    return {
        subscribe,
        
    }
}
export const workspace = createWorkspace();

function createItems() 
{
    const { subscribe, set, update } = writable([]);
    return {
        subscribe,
        set,
        update,
        addSides: () => 
        {
            set([
                { name : "s1",  x : 0, y: 0, w: 0, component : SidePanel },
                { name : "s2", x : 0, y : 0, component : SidePanel, props: { mirror : true } }
            ]);
            schlitze.set({ 
                h1: false, h2: false, h3: false, h4: false,
                v1: false, v2: false, v3: false, v4: false
            });
        },        

        addShelf: (w, h, name, isVertical) =>
        {
            update(items => [...items, { 
                name,
                props: { w, h },
                component : isVertical ? VerticalShelf : Shelf
            }]);
        },

        addBar: (w, name) =>
        {
            update(items => [...items, { 
                name,
                component : Bar
            }]);
        },

        getDimensions: () => {
            let tempItems = get(items);            
            tempItems.forEach(i => {
                if (i.name)
                {
                    var item = document.querySelector('#'+  i.name);
                    if (item)
                    {
                        var rect = item.getBoundingClientRect();
                        if (rect && rect.width && rect.height)
                        {
                            const z = get(zoom);
                            i.w = Math.ceil(rect.width*0.26458333*z);
                            i.h = Math.ceil(rect.height*0.26458333*z);
                            console.log("size of " + i.name + " is " + i.w + "/" + i.h);                            
                        }
                    }
                }
            });
            items.set(tempItems);
        },

        reposition: () => {
            console.log("Reposition");
            let xpos = 0; 
            let ypos = 0;
            let lineHeight = 0;
            const gapValue = get(gap);

            let ws = get(workspace);
            let tempItems = get(items);
            tempItems.forEach(i => {
                if (i.w && i.h)
                {
                    if (xpos + i.w + gapValue > ws.width)
                    {
                        ypos += lineHeight + gapValue;
                        xpos = 0;
                    }

                    if (i.x !== xpos || i.y !== ypos)
                    {
                        i.x = xpos;
                        i.y = ypos;
                    }
                    console.log("move " + i.name + " to " + i.x + "/" + i.y);                
                    lineHeight = Math.max(lineHeight, i.h);
                    xpos += i.w + gapValue;
                }
            })
            items.set(tempItems);
        }
    }
}
export const items = createItems();

