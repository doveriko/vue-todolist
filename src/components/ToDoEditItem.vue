<template>
  <div class="edit-item">
    <input
      type="text"
      v-model="itemInput"
      class="input-label"
      @keyup.enter="editItem"
    />
    <div class="input-actions">
      <fa-icon icon="floppy-disk" class="icon save" @click="editItem" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isFilterActive: false,
      itemInput: this.item.input,
    };
  },
  props: {
    item: Object,
  },
  methods: {
    ...mapActions(["updateItemInList"]),
    editItem() {
      let itemCopy = this.item;
      itemCopy.input = this.itemInput;
      this.updateItemInList(itemCopy);
      this.$emit("updateItem");
    },
  },
};
</script>