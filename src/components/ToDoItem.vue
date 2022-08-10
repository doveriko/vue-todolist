<template>
  <base-card class="todo-item" :class="{ completed: item.completed }">
    <!-- Item completed checker -->
    <div class="item-checker">
      <input
        type="checkbox"
        name="item"
        v-model="isItemCompleted"
        @change="markAsCompleted"
      />
      <label for="item"></label>
      <span>{{ item.completed }}</span>
      <span>{{ isItemCompleted }}</span>
    </div>

    <!-- Item input display -->
    <EditItem
      v-if="isEditMode"
      class="item-display"
      :item="item"
      @updateItem="editItem(false)"
    />

    <div v-else class="item-display">
      <span class="input-label">{{ item.input }}</span>
      <div class="input-actions">
        <fa-icon icon="pen" class="icon edit" @click="editItem(true)" />
        <fa-icon icon="trash" class="icon remove" @click="removeItem" />
      </div>
    </div>
  </base-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isEditMode: false,
      isItemCompleted: this.item.completed,
    };
  },
  props: {
    item: Object,
  },
  components: {
    EditItem: () =>
      import(/* webpackChunkName: "EditItem" */ "./ToDoEditItem.vue"),
  },
  methods: {
    ...mapActions(["removeItemFromList", "markTaskAsCompleted"]),
    editItem(mode) {
      this.isEditMode = mode;
    },
    removeItem() {
      this.removeItemFromList(this.item);
    },
    markAsCompleted() {
      let itemCopy = this.item;
      itemCopy.completed = this.isItemCompleted;
      this.markTaskAsCompleted(itemCopy);
    },
  },
};
</script>

<style lang="scss">
.todo-item {
  display: flex;

  .item-checker {
    flex-basis: 10%;

    input {
      cursor: pointer;
    }
  }

  .item-display {
    display: flex;
    flex-basis: 90%;

    .input-label {
      flex-basis: 80%;
      text-align: center;
      font-size: 1rem;
    }

    .input-actions {
      flex-basis: 20%;
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
