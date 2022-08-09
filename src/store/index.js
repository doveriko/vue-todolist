import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    addedItems: [],
  },
  actions: {
    async addItemToList(context, data) {
      context.commit("ADD_ITEM_TO_LIST", data);
    },
    async editItemInList(context, data) {
      context.commit("EDIT_ITEM_IN_LIST", data);
    },
  },
  mutations: {
    ADD_ITEM_TO_LIST(state, payload) {
      state.addedItems.push(payload);
    },
    EDIT_ITEM_IN_LIST(state, payload) {
      let itemIndex = state.addedItems.findIndex(e => e.id === payload.id);
      if (itemIndex != -1) {
        state.addedItems[itemIndex].input = payload.input;
      }
    },
  },
  getters: {
    allItems(state) {
      return state.addedItems;
    },
  },
});
