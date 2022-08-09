<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  margin: 1rem auto;
  padding: 1rem;
  background-color: #fff;

  &:first-of-type {
    margin-top: 2rem;
  }
}
</style>
