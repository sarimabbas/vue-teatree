# Vue Teatree

A simple treeview component for VueJS with no added dependencies. 

## How it works

The Teatree treeview is purely a function of your data. If you want to make changes to the treeview (e.g. toggling children, hiding nodes etc.) you should modify the data object. Teatree will never mutate your data (the only way this can happen is if you write click handlers that do so). 

Teatree accepts an array of `NodeType`. The interface can be found in `src/components/NodeType.ts`. This means you can render multiple roots in the treeview.


