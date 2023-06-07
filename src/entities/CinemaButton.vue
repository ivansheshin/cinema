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
  padding: 6px;
}
</style>
