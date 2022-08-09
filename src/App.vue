<template>
  <div id="app">
    <h1 class="app-header">TO DO LIST</h1>
    <ToDoGenerator />
    <ToDoList />
  </div>
</template>

<script>
import ToDoGenerator from "./components/ToDoGenerator.vue";
import ToDoList from "./components/ToDoList.vue";

export default {
  name: "App",
  components: {
    ToDoGenerator,
    ToDoList,
  },
};
</script>

<style lang="scss">
@use "./sass/styles.scss";
</style>
