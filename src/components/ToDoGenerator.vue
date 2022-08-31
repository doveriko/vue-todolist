<template>
  <div class="todo-generator">
    <input
      type="text"
      name="address"
      v-model.trim="itemInput"
      placeholder="Add one element to your list"
      @keyup.enter="addItem"
    />
    <fa-icon
      icon="circle-plus"
      class="icon"
      :disabled="!itemInput"
      @click="addItem"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      itemInput: null,
    };
  },
  methods: {
    ...mapActions(["addItemToList", "removeAllFilters"]),
    addItem() {
      if (this.itemInput) {
        let itemId = Date.now();
        let item = {
          id: itemId,
          input: this.itemInput,
          completed: false,
        };

        this.addItemToList(item);
        this.removeAllFilters();

        this.itemInput = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-generator {
  input {
    height: 25px;
    width: 200px;
    font-size: 0.8rem;
    margin: 0 0.5rem;
    text-align: center;
  }
}
</style>
