<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NodeType from "../../types/NodeType";
import ChevronRight from "./ChevronRight.vue";
import ChevronDown from "./ChevronDown.vue";

@Component({
  components: {
    ChevronRight,
    ChevronDown,
  },
})
export default class NodeToggle extends Vue {
  // exclamation means that it is required, which means it does not need to be
  // initialized with a constructor
  @Prop({ required: true }) node!: NodeType;

  get someChildrenVisible(): boolean {
    return this.node.children?.some((child) => child.show);
  }

  toggleChildren() {
    this.node.showChildren = !this.node.showChildren;
  }
}
</script>

<template slot="node-toggle" slot-scope="{ node }">
  <span
    class="teatree-node-item-icon"
    @click="toggleChildren"
    v-if="node.children && node.children.length && someChildrenVisible"
  >
    <chevron-down v-if="node.showChildren" width="20" />
    <chevron-right v-else width="20" />
  </span>
</template>

<style>
.teatree-node-item-icon {
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  color: #cbd5e0;
}
</style>
