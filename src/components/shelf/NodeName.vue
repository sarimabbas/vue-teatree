<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NodeType from "../../types/NodeType";

@Component({
  components: {},
})
export default class NodeName extends Vue {
  // exclamation means that it is required, which means it does not need to be
  // initialized with a constructor
  @Prop({ required: true }) node!: NodeType;

  // left click event handler (attached to each node)
  @Prop({ required: true }) handleNodeLeftClick!: (
    event: any,
    node: NodeType
  ) => any;

  // right click event handler (attached to each node)
  @Prop({ required: true }) handleNodeRightClick!: (
    event: any,
    node: NodeType
  ) => any;

  get someChildrenVisible(): boolean {
    return this.node.children?.some((child) => child.show);
  }

  get haveLeftPadding(): boolean {
    if (this.node.children && !this.node.children.length) {
      return true;
    }
    if (!this.someChildrenVisible) {
      return true;
    }
    return false;
  }
}
</script>

<template slot="node-name" slot-scope="{ node }">
  <span
    @click="handleNodeLeftClick(node, $event)"
    @contextmenu.prevent="handleNodeRightClick(node, $event)"
    :class="[
      'teatree-node-item-name',
      { 'teatree-node-item-name-padded': this.haveLeftPadding },
    ]"
  >
    {{ node.name }}
  </span>
</template>

<style>
.teatree-node-item-name {
  display: inline-block;
  /* width: 100%; */
  font-size: 0.875rem;
  color: #a0aec0;
  margin-left: 0.5rem;
  user-select: none;

  /* truncate */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.teatree-node-item-name-padded {
  padding-left: 1.5rem;
}
</style>
