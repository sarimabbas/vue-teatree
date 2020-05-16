<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NodeType from "../types/NodeType";
import Node from "./Node.vue";
@Component({
  components: {
    Node,
  },
})
export default class Teatree extends Vue {
  // exclamation means that it is required, which means it does not need to be
  // initialized with a constructor
  @Prop({ required: true }) roots!: NodeType[];
}
</script>

<template>
  <div class="teatree">
    <div>
      <node v-for="(node, index) in roots" :node="node" :key="index">
        <!-- Recursive node toggle slot -->
        <template slot="node-toggle" slot-scope="{ node }">
          <slot name="node-toggle" :node="node"></slot>
        </template>

        <!-- Recursive node name slot -->
        <template slot="node-name" slot-scope="{ node }">
          <slot name="node-name" :node="node"></slot>
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
