<template>
  <form class="form">
    <div class="form__content">
      <slot name="title" />
      <slot name="fields" />
      <slot name="actions" />
    </div>
  </form>
</template>
<style lang="css" scoped>
.form {
  background-color: var(--background-color);
  border: 1px solid #121212;
  padding: 26px;

  .form__content {
    display: grid;
    gap: 16px;
  }
}
</style>
