<template>
  <base-card>
    <p>{{ item.input }}</p>
  </base-card>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style scoped lang="scss">
p {
  margin: 0;
}
</style>
