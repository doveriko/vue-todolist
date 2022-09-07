<template>
  <div class="completed-item-filter">
    <input
      type="checkbox"
      name="completedItemFilter"
      v-model="isFilterActive"
      @change="toggleFilter"
    />
    <label for="completedItemFilter" />
    <span @click="toggleFilterFromLabel" class="filter-message"
      >Show only completed tasks</span
    >
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
  props: {
    anyFiltersApplied: Boolean,
  },
  watch: {
    anyFiltersApplied(filtersApplied) {
      if (!filtersApplied) {
        this.isFilterActive = false;
      }
    },
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
    toggleFilterFromLabel() {
      this.isFilterActive = !this.isFilterActive;
      this.toggleFilter();
    },
  },
};
</script>

<style lang="scss" scoped>
$break-small: 767px;

input {
  margin: 10px;
  cursor: pointer;
  @media (max-width: $break-small) {
    margin: 5px;
  }
}

.filter-message {
  line-height: 30px;
  cursor: pointer;

  @media (max-width: $break-small) {
    line-height: 15px;
  }
}
</style>
