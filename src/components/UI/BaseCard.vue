<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  border-radius: 8px;
  border: 1px solid #120531;
  padding: 0.5rem;
  margin: 1rem auto;
  padding: 1rem;
  background-color: #fff;

  &:first-of-type {
    margin-top: 2rem;
  }
}
</style>
