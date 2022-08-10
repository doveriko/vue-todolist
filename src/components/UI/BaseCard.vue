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
  background-color: #fff;
  max-width: 500px;

  &:first-of-type {
    margin-top: 2rem;
  }

  &:hover {
    background-color: #e3f0ff;
  }

  &.completed {
    border-color: #008000;
    background-color: #ddffec;
  }
}
</style>
