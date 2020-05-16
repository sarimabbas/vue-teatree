<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Teatree from "./components/Teatree.vue";
import NodeType from "./types/NodeType";

// import off the shelf components
import NodeName from "./components/shelf/NodeName.vue";
import NodeToggle from "./components/shelf/NodeToggle.vue";

@Component({
  components: {
    Teatree,
    NodeName,
    NodeToggle,
  },
})
export default class App extends Vue {
  public data: NodeType[] = [
    {
      name: "parent",
      show: true,
      showChildren: true,
      selected: false,
      children: [
        {
          name: "child",
          show: true,
          showChildren: true,
          selected: false,
          children: [
            {
              name: "grandchild",
              show: true,
              showChildren: true,
              selected: false,
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: "parent",
      show: true,
      showChildren: true,
      selected: false,
      children: [
        {
          name: "child",
          show: true,
          showChildren: true,
          selected: false,
          children: [
            {
              name: "grandchild",
              show: true,
              showChildren: true,
              selected: false,
              children: [],
            },
          ],
        },
      ],
    },
  ];
}
</script>

<template>
  <div id="app">
    <div class="text">
      <h1 class="header">🍵 Vue Teatree</h1>
      <h2 class="subheader">
        A simple treeview component for Vue, with no additional dependencies.
      </h2>
      <!-- Place this tag where you want the button to render. -->
      <a
        class="github-button"
        href="https://github.com/sarimabbas/vue-teatree"
        data-color-scheme="no-preference: light; light: light; dark: dark;"
        data-size="large"
        data-show-count="true"
        aria-label="Star sarimabbas/vue-teatree on GitHub"
        >Star</a
      >
    </div>

    <div class="sidebar">
      <Teatree :roots="data">
        <!-- Recursive node toggle slot -->
        <template slot="node-toggle" slot-scope="{ node }">
          <!-- Off-shelf component provided by default, which inserts itself recursively into all slots -->
          <NodeToggle :node="node" />
        </template>

        <!-- Recursive node name slot -->
        <template slot="node-name" slot-scope="{ node }">
          <!-- Off-shelf component provided by default, which inserts itself recursively into all slots -->
          <NodeName
            :node="node"
            :handleNodeLeftClick="() => {}"
            :handleNodeRightClick="() => {}"
          />
        </template>
      </Teatree>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@700&family=Inter:wght@400;500;600&display=swap");

#app {
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  font-family: "Inter", sans-serif;
}

.text {
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
}

.header {
  font-size: 2rem;
  font-family: "Arima Madurai", serif;
  font-weight: 700;
}

.subheader {
  margin-bottom: 30px;
}

.sidebar {
  background-color: black;
  width: 30%;
  min-width: 250px;
  margin-left: auto;
  margin-right: auto;
}
</style>
