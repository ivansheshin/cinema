<script lang="ts" setup>

defineEmits(['update:inputValue'])

defineProps({
  type: {
    type: String,
    required: true,
  },
  inputValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
})

</script>

<template>
  <input
    :placeholder="placeholder"
    :type="type"
    class="cinema-input"
    @input="$emit('update:inputValue', $event.target.value)"
  >
</template>

<style lang="css" scoped>
.cinema-input {
  padding: 8px;
  border: 1px solid;
  border-radius: 0;
}
</style>
