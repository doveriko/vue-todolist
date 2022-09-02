import Vue from "vue";
import Vuex from "vuex";
import mapValues from "lodash/mapValues";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    addedItems: [],
    filters: {
      completedItems: false,
      inputSearch: false,
    },
    search: null,
  },
  actions: {
    addItemToList(context, data) {
      context.commit("ADD_ITEM_TO_LIST", data);
    },
    updateItemInList(context, data) {
      context.commit("UPDATE_ITEM_IN_LIST", data);
    },
    removeItemFromList(context, data) {
      context.commit("REMOVE_ITEM_FROM_LIST", data);
    },
    markTaskAsCompleted(context, data) {
      context.commit("MARK_TASK_AS_COMPLETED", data);
    },
    applyFilter(context, filterType) {
      context.commit("APPLY_FILTER", filterType);
    },
    removeFilter(context, filterType) {
      context.commit("REMOVE_FILTER", filterType);
    },
    removeAllFilters(context) {
      context.commit("REMOVE_ALL_FILTERS");
    },
  },
  mutations: {
    ADD_ITEM_TO_LIST(state, payload) {
      state.addedItems = [...state.addedItems, payload];
    },
    UPDATE_ITEM_IN_LIST(state, payload) {
      let itemIndex = state.addedItems.findIndex(
        (item) => item.id === payload.id
      );
      if (itemIndex > -1) {
        state.addedItems[itemIndex].input = payload.input;
      }
    },
    REMOVE_ITEM_FROM_LIST(state, payload) {
      let itemIndex = state.addedItems.findIndex(
        (item) => item.id === payload.id
      );
      if (itemIndex > -1) {
        state.addedItems.splice(itemIndex, 1);
      }
    },
    MARK_TASK_AS_COMPLETED(state, payload) {
      let itemIndex = state.addedItems.findIndex(
        (item) => item.id === payload.id
      );
      if (itemIndex > -1) {
        state.addedItems[itemIndex].completed = payload.completed;
      }
    },
    APPLY_FILTER(state, type) {
      state.filters[type] = true;
    },
    REMOVE_FILTER(state, type) {
      state.filters[type] = false;
    },
    REMOVE_ALL_FILTERS(state) {
      state.filters = mapValues(state.filters, () => false);
    },
    updateSearch(state, payload) {
      state.search = payload;
    },
  },
  getters: {
    allItems(state) {
      return state.addedItems.reverse();
    },
    anyFiltersApplied(state) {
      return state.filters.completedItems || state.filters.inputSearch;
    },
    // filteredItems(state)  {
    //   if (state.filters.completedItems) {
    //     return state.addedItems.filter((i) => i.completed);
    //   }
    // },
    filteredItems(state) {
      let filteredItems = state.addedItems;

      if (state.filters.completedItems) {
        return filteredItems.filter((item) => item.completed);
      }
      if (state.filters.inputSearch) {
        return filteredItems.filter((item) =>
          item.input.includes(state.search)
        );
      }
    },
  },
});
