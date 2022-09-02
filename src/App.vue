<template>
  <div id="app">
    <h1 class="app-header">TO DO LIST</h1>
    <to-do-generator />
    <filters v-if="allItems.length" :anyFiltersApplied="anyFiltersApplied" />
    <to-do-list-filtered v-if="anyFiltersApplied" />
    <to-do-list v-else />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    ToDoGenerator: () =>
      import(
        /* webpackChunkName: "ToDoGenerator" */ "./components/ToDoGenerator.vue"
      ),
    Filters: () =>
      import(
        /* webpackChunkName: "Filters" */ "./components/Filters/Filters.vue"
      ),
    ToDoList: () =>
      import(/* webpackChunkName: "ToDoList" */ "./components/ToDoList.vue"),
    ToDoListFiltered: () =>
      import(
        /* webpackChunkName: "ToDoListFiltered" */ "./components/ToDoListFiltered.vue"
      ),
  },
  computed: {
    ...mapGetters(["allItems", "anyFiltersApplied"]),
  },
};
</script>

<style lang="scss">
@use "./sass/styles.scss";
</style>
