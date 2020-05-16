<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NodeType from "../types/NodeType";
import Node from "./Node.vue";
import NodeName from "./shelf/NodeName.vue";
@Component({
  components: {
    Node,
    NodeName,
  },
})
export default class Teatree extends Vue {
  // exclamation means that it is required, which means it does not need to be
  // initialized with a constructor
  @Prop({ required: true }) roots!: NodeType[];

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
}
</script>

<template>
  <div class="teatree">
    <div>
      <node
        v-for="(node, index) in roots"
        :node="node"
        :key="index"
        :handleNodeLeftClick="handleNodeLeftClick"
        :handleNodeRightClick="handleNodeRightClick"
      >
        <!-- Recursive node toggle slot -->

        <!-- Recursive node name slot -->
        <template slot="node-name" slot-scope="{ node }">
          <slot name="node-name" :node="node">
            <!-- Off-shelf component provided by default -->
            <NodeName :node="node" />
          </slot>
        </template>
      </node>
    </div>
  </div>
</template>

<style>
.teatree {
  cursor: pointer;
  height: 100%;
  overflow: hidden;
}
</style>
