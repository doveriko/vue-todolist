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
import utils from "./../../src/lib/utils";

export default {
  data() {
    return {
      itemInput: null,
      itemId: null,
    };
  },
  methods: {
    ...mapActions(["addItemToList", "removeAllFilters"]),
    addItem() {
      if (this.itemInput) {
        this.itemId = utils.idGenerator(6);

        let item = {
          id: this.itemId,
          input: this.itemInput,
          completed: false,
        };

        this.addItemToList(item);
        this.removeAllFilters();

        this.itemInput = null;
      }
    },
    idGenerator(length) {
      let result = "";
      let characters = "0123456789";
      let charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      this.itemId = result;
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
