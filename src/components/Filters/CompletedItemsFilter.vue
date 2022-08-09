<template>
  <div class="completed-item-filter">
    <input
      type="checkbox"
      name="completedItemFilter"
      v-model="isFilterActive"
      @change="toggleFilter"
    />
    <label for="completedItemFilter"></label>
    <span>Show only completed tasks</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isFilterActive: false,
    };
  },
  methods: {
    ...mapActions(["applyFilter", "removeFilter"]),
    toggleFilter() {
      if (this.isFilterActive) {
        this.applyFilter("completedItems");
      } else {
        this.removeFilter("completedItems");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.completed-item-filter {
  margin: 1rem 0;
  font-size: 0.75rem;
}
</style>
