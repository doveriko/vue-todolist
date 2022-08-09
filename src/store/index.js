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
    async updateItemInList(context, data) {
      context.commit("UPDATE_ITEM_IN_LIST", data);
    },
    async removeItemFromList(context, data) {
      context.commit("REMOVE_ITEM_FROM_LIST", data);
    },
    async markTaskAsCompleted(context, data) {
      context.commit("MARK_TASK_AS_COMPLETED", data);
    },
  },
  mutations: {
    ADD_ITEM_TO_LIST(state, payload) {
      state.addedItems.push(payload);
    },
    UPDATE_ITEM_IN_LIST(state, payload) {
      let itemIndex = state.addedItems.findIndex(e => e.id === payload.id);
      if (itemIndex > -1) {
        state.addedItems[itemIndex].input = payload.input;
      }
    },
    REMOVE_ITEM_FROM_LIST(state, payload) {
      let itemIndex = state.addedItems.findIndex(e => e.id === payload.id);
      if (itemIndex > -1) {
        state.addedItems.splice(itemIndex, 1);
      }
    },
    MARK_TASK_AS_COMPLETED(state, payload) {
      let itemIndex = state.addedItems.findIndex(e => e.id === payload.id);
      if (itemIndex > -1) {
        state.addedItems[itemIndex].completed = payload.completed;
      }
    },
  },
  getters: {
    allItems(state) {
      return state.addedItems.reverse();
    },
  },
});
