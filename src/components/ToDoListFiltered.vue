<template>
  <div class="todo-list">
    <span>TO DO LIST FILTERED</span>
    <!-- <div v-if="allItems.length" class="list-wrapper">
      <to-do-item
        v-for="item in allItems"
        :key="item.id"
        :item="item"
      ></to-do-item>
    </div>
    <div v-else class="no-items">
      <p class="no-items-message">Your list is empty</p>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ToDoItem from "./ToDoItem.vue";

export default {
  components: {
    ToDoItem,
  },
  computed: {
    ...mapGetters(["allItems"]),
  },
};
</script>

<style scoped lang="scss">
.no-items-message {
  font-size: 0.75rem;
}
</style>
