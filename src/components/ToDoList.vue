<template>
  <div class="todo-list">
    <div v-if="allItems.length" class="list-wrapper">
      <to-do-item
        v-for="item in allItems"
        :key="item.id"
        :item="item"
      ></to-do-item>
    </div>
    <div v-else class="no-items">
      <p class="no-items-message">Your list is empty</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
    ToDoItem: () => import(/* webpackChunkName: "ToDoItem" */ "./ToDoItem.vue"),
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
