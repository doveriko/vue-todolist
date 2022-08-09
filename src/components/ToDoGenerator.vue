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
      itemId: null,
    };
  },
  methods: {
    ...mapActions(["addItemToList", "removeAllFilters"]),
    async addItem() {
      if (this.itemInput) {
        this.idGenerator(3);

        let item = {
          id: this.itemId,
          input: this.itemInput,
          completed: false,
        };

        await this.addItemToList(item);
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
.icon[disabled] {
  pointer-events: none;
  color: #999;
}
</style>
