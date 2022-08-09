<template>
  <div class="todo-generator">
    <p class="">Add one element to your list</p>
    <input
      type="text"
      name="address"
      v-model.trim="itemInput"
      placeholder="Enter a new task"
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
    ...mapActions(["addItemToList"]),
    async addItem() {
      if (this.itemInput) {
        let item = {
          id: this.idGenerator(3),
          input: this.itemInput,
          checked: false,
        };
        await this.addItemToList(item);
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
