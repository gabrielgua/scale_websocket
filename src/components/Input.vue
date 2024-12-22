<script lang="ts" setup>
defineProps<{
  placeholder?: string,
  value?: string
}>();


</script>

<template>
  <input class="p-3 border rounded-lg" type="text" :placeholder="placeholder" :value="value" disabled />
</template>
