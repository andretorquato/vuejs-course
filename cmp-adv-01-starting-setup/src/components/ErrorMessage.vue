<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<script>
export default {};
</script>

<style scoped>
dialog {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
