<template>
  <div class="todo-list">
    <div v-if="filteredItems.length" class="list-wrapper">
      <to-do-item
        v-for="item in filteredItems"
        :key="item.id"
        :item="item"
      ></to-do-item>
    </div>
    <div v-else class="no-items">
      <p class="no-items-message">No items found for this filter.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      filteredList: [],
    };
  },
  components: {
    ToDoItem: () => import(/* webpackChunkName: "ToDoItem" */ "./ToDoItem.vue"),
  },
  computed: {
    ...mapGetters(["filteredItems"]),
  },
};
</script>
