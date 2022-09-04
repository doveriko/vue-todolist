<template>
  <div class="filters">
    <h4>FILTERS:</h4>
    <completed-items-filter />
    <search-filter />
  </div>
</template>

<script>
export default {
  components: {
    CompletedItemsFilter: () =>
      import(
        /* webpackChunkName: "CompletedItemsFilter" */ "./CompletedItemsFilter.vue"
      ),
    SearchFilter: () =>
      import(/* webpackChunkName: "SearchFilters" */ "./SearchFilter.vue"),
  },
};
</script>

<style lang="scss" scoped>
$break-small: 767px;

.filters {
  display: flex;
  justify-content: space-evenly;
  font-size: 0.6rem;
  border: 1px dotted #ccc;
  margin: 10px 0;
  padding: 5px;
  height: 30px;

  @media (max-width: $break-small) {
    height: 40px;
  }

  h4 {
    margin: auto 1rem;
  }

  > div {
    flex-basis: 45%;
    border-left: 1px dotted #ccc;
    display: flex;
    justify-content: center;

    @media (max-width: $break-small) {
      flex-direction: column-reverse;
    }
  }
}
</style>
