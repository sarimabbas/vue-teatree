<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Teatree from "./components/Teatree.vue";
import NodeType from "./components/NodeType";

@Component({
  components: {
    Teatree,
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
        A simple treeview component for Vue, <br />with no additional
        dependencies.
      </h2>
    </div>

    <div class="sidebar">
      <Teatree
        :roots="data"
        :handleNodeLeftClick="() => {}"
        :handleNodeRightClick="() => {}"
      />
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

.sidebar {
  background-color: black;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
}
</style>
