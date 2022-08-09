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
    async editItem() {
      console.log("updatedInput", this.item.input);
      // await this.updateItemInList(this.item.input);
      this.$emit("updateItem");
    },
  },
};
</script>

<style scoped lang="scss">
p {
  margin: 0;
}
</style>
