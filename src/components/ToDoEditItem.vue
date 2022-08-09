<template>
  <div class="edit-item">
    <input type="text" :value="item.input" class="input-label" />
    <div class="input-actions">
      <fa-icon icon="floppy-disk" class="icon save" @click="saveItem" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  methods: {
    saveItem() {
      this.$emit("saveItem");
    },
  },
};
</script>

<style scoped lang="scss">
p {
  margin: 0;
}
</style>
