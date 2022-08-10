<template>
  <div class="edit-item">
    <input type="text" v-model="item.input" class="input-label" />
    <div class="input-actions">
      <fa-icon icon="floppy-disk" class="icon save" @click="editItem" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    item: Object,
  },
  methods: {
    ...mapActions(["updateItemInList"]),
    editItem() {
      this.updateItemInList(this.item);
      this.$emit("updateItem");
    },
  },
};
</script>
