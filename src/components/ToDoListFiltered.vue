<template>
  <div class="todo-list">
    <div v-if="filteredList.length" class="list-wrapper">
      <to-do-item
        v-for="item in filteredList"
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
import ToDoItem from "./ToDoItem.vue";

export default {
  data() {
    return {
      filteredList: [],
    };
  },
  components: {
    ToDoItem,
  },
  computed: {
    ...mapGetters(["filteredItems"]),
  },
  created() {
    this.filteredList = this.filteredItems("completedItems");
  },
};
</script>

<style scoped lang="scss">
.no-items-message {
  font-size: 0.75rem;
}
</style>
