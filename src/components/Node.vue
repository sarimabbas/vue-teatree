<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NodeType from "../types/NodeType";
import ChevronRight from "./shelf/ChevronRight.vue";
import ChevronDown from "./shelf/ChevronDown.vue";

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
      <!-- toggle slot -->
      <slot name="node-toggle" :node="node"></slot>
      <!-- name slot -->
      <slot name="node-name" :node="node"></slot>
    </div>
    <!-- nested items (if any) -->
    <div v-if="node.children && node.children.length && node.showChildren">
      <node
        class="teatree-node-item-name-padded-leaf"
        v-for="(child, index) in node.children"
        :key="index"
        :node="child"
      >
        <!-- the template keyword is used by the caller to insert slotted content -->
        <!-- but in this case, the caller is inserting the same slot as content -->
        <template slot="node-toggle" slot-scope="{ node }">
          <slot name="node-toggle" :node="node"></slot>
        </template>

        <template slot="node-name" slot-scope="{ node }">
          <slot name="node-name" :node="node"></slot>
        </template>
      </node>
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

.teatree-node-item-name-padded-leaf {
  padding-left: 1.25rem;
}
</style>
