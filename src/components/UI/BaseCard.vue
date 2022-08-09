<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  border-radius: 8px;
  border: 2px solid #120531;
  padding: 0.5rem;
  margin: 1rem auto;
  padding: 1rem;
  background-color: #fff;

  &:first-of-type {
    margin-top: 2rem;
  }

  &:hover {
    background-color: #e3f0ff;
  }

  &.completed {
    border-color: green;
    background-color: rgb(221, 255, 236);
  }
}
</style>
