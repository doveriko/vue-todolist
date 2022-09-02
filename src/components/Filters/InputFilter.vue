<template>
  <div class="input-filter">
    <input type="input" name="inputFilter" />
    <label for="inputFilter"></label>
    <span>Search your task</span>
  </div>
</template>

<script>
// import { mapActions } from "vuex";

export default {
  data() {
    return {
      // isFilterActive: false,
    };
  },
  props: {
    anyFiltersApplied: Boolean,
  },
  watch: {
    // anyFiltersApplied(filtersApplied) {
    //   if (!filtersApplied) {
    //     this.isFilterActive = false;
    //   }
    // },
  },
  methods: {
    // ...mapActions(["applyFilter", "removeFilter"]),
    // toggleFilter() {
    //   if (this.isFilterActive) {
    //     this.applyFilter("completedItems");
    //   } else {
    //     this.removeFilter("completedItems");
    //   }
    // },
  },
};
</script>

<style scoped lang="scss">
$break-small: 767px;

.completed-item-filter {
  margin: 1rem 0;
  font-size: 0.75rem;
}

span {
  line-height: 30px;

  @media (max-width: $break-small) {
    line-height: initial;
    margin-top: 10px;
    margin-bottom: -5px;
  }
}

input {
  width: 50%;
  height: 15px;
  margin: 5px;

  @media (max-width: $break-small) {
    width: 90%;
    margin: 10px auto;
  }
}
</style>
