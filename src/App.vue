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
@use "./sass/styles.scss";
</style>
