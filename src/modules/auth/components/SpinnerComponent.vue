<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'dark'
  }
});
</script>

<template>
  <div
    :class="`spinner-border text-${color}`"
    role="status"
  >
    <span class="visually-hidden">Loading...</span>
  </div>
</template>
