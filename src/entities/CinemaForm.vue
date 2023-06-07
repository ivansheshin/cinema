<template>
  <form class="form">
    <div class="form__content">
      <slot name="title" />
      <slot />
    </div>
  </form>
</template>
<style lang="css" scoped>
.form {
  background-color: var(--background-color);
  border: 1px solid #121212;

  .form__content {
    display: grid;
  }
}
</style>
