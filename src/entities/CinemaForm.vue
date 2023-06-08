<template>
  <form class="form">
    <div class="form__content">
      <slot name="title" />
      <div class="form__fields">
        <slot name="fields" />
        <slot name="actions" />
      </div>
    </div>
  </form>
</template>
<style lang="css" scoped>
.form {
  padding: 26px;
  background-color: var(--primary-background-color);
  border: 1px solid var(--primary-border-color);
  border-radius: 4px;

  .form__content {
    display: grid;
    gap: 20px;
  }

  .form__fields {
    display: grid;
    gap: 16px;
  }
}
</style>
