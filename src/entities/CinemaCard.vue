<template>
  <div class="cinema-film-card">
    <div class="cinema-film-card__content">
      <slot name="logo" />
      <slot name="title" />
      <slot name="description" />
      <slot name="actions" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.cinema-film-card {
  padding: 26px;
  background-color: var(--primary-background-color);
  border: var(--primary-border);
  border-radius: 4px;

  .cinema-film-card__content {
    display: grid;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
