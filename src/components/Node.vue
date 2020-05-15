<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NodeType from "./NodeType";
import ChevronRight from "./ChevronRight.vue";
import ChevronDown from "./ChevronDown.vue";

@Component({
  components: {
    Node,
    ChevronRight,
    ChevronDown,
  },
  name: "node",
})
export default class Node extends Vue {
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

  toggleChildren() {
    this.node.showChildren = !this.node.showChildren;
  }

  get someChildrenVisible(): boolean {
    return this.node.children.some((child) => child.show);
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

<template>
  <div class="teatree-node" v-if="node.show">
    <!-- the single item -->
    <div
      :class="[
        'teatree-node-item',
        node.selected ? 'teatree-node-item-selected' : '',
      ]"
    >
      <!-- the chevron -->
      <span
        class="teatree-node-item-icon"
        @click="toggleChildren"
        v-if="node.children && node.children.length && someChildrenVisible"
      >
        <chevron-down v-if="node.showChildren" width="20" />
        <chevron-right v-else width="20" />
      </span>
      <!-- name -->
      <span
        :class="[
          'teatree-node-item-name',
          { 'teatree-node-item-name-padded': this.haveLeftPadding },
        ]"
        @click="handleNodeLeftClick(node, $event)"
        @contextmenu.prevent="handleNodeRightClick(node, $event)"
        >{{ node.name }}</span
      >
    </div>
    <!-- nested items (if any) -->
    <div v-if="node.children && node.children.length && node.showChildren">
      <node
        class="teatree-node-item-name-padded-leaf"
        v-for="(child, index) in node.children"
        :key="index"
        :node="child"
        :handleNodeLeftClick="handleNodeLeftClick"
        :handleNodeRightClick="handleNodeRightClick"
      ></node>
    </div>
  </div>
</template>

<style>
.teatree-node {
  padding-right: 0.25rem;
}

.teatree-node-item {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  height: 1.5rem;
  background: transparent;

  /* hack to make hover the full width of parent */
  padding-left: 100%;
  margin-left: -100%;
  padding-right: 100%;
  margin-right: -100%;
}

.teatree-node-item:hover {
  background-color: #718096;
}

.teatree-node-item-selected {
  background-color: #718096;
}

.teatree-node-item-icon {
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  color: #cbd5e0;
}

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

.teatree-node-item-name-padded-leaf {
  padding-left: 1.25rem;
}
</style>
