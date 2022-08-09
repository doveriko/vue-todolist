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
  },
  mutations: {
    ADD_ITEM_TO_LIST(state, payload) {
      state.addedItems.push(payload);
    },
  },
  getters: {
    allItems(state) {
      return state.addedItems;
    },
  },
});
