<script lang="ts" setup>
defineEmits(['click'])
</script>

<template>
  <button class="cinema-button" type="button" @click="$emit('click')">
    <slot />
  </button>
</template>

<style lang="css" scoped>
.cinema-button {
  padding: 8px;
  color: var(--primary-text-color);
  background-color: var(--secondary-background-color);
  border: var(--primary-border);
}
</style>
