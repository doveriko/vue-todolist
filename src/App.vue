<template>
  <div id="app">
    <ToDoGenerator />
  </div>
</template>

<script>
import ToDoGenerator from "./components/ToDoGenerator.vue";

export default {
  name: "App",
  components: {
    ToDoGenerator,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
