<template>
  <div id="app">
    <h1 class="app-header">TO DO LIST</h1>
    <ToDoGenerator />
    <Filters v-if="allItems.length" :anyFiltersApplied="anyFiltersApplied" />
    <ToDoListFiltered v-if="anyFiltersApplied" />
    <ToDoList v-else />
  </div>
</template>

<script>
import ToDoGenerator from "./components/ToDoGenerator.vue";
import Filters from "./components/Filters/CompletedItemsFilter.vue";
import ToDoList from "./components/ToDoList.vue";
import ToDoListFiltered from "./components/ToDoListFiltered.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    ToDoGenerator,
    Filters,
    ToDoList,
    ToDoListFiltered,
  },
  computed: {
    ...mapGetters(["allItems", "anyFiltersApplied"]),
  },
};
</script>

<style lang="scss">
@use "./sass/styles.scss";
</style>
