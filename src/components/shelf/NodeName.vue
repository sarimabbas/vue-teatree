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
}
</script>

<template slot="node-name" slot-scope="{ node }">
  <div>{{ node.name }}</div>
</template>

<style></style>
