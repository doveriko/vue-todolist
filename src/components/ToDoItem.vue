<template>
  <base-card class="todo-item">
    <!-- Item checker -->
    <div class="item-checker">
      <input type="checkbox" name="item" v-model="inputVal" />
      <label for="item"></label>
    </div>

    <!-- Item display -->
    <EditItem
      v-if="isEditMode"
      class="item-display"
      :item="item"
      @saveItem="editItem(false)"
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
import EditItem from "./ToDoEditItem.vue";

export default {
  data() {
    return {
      inputVal: null,
      isEditMode: false,
    };
  },
  props: {
    item: Object,
  },
  components: {
    EditItem,
  },
  methods: {
    editItem(mode) {
      this.isEditMode = mode;
    },
    removeItem() {
      console.log("removeItem");
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
