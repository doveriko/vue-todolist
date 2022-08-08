<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <base-card></base-card>
  </div>
</template>

<script>
import HelloWorld from "./components/ToDoGenerator.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
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
