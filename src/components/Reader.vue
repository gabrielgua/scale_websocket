<script setup lang="ts">
import { useScaleStore } from '@/stores/scale.store';
import Input from './Input.vue';
import { computed, onBeforeUnmount } from 'vue';
import { useWebSocketStore } from '@/stores/websocket.store';

const websocketStore = useWebSocketStore();

onBeforeUnmount(() => {
  websocketStore.close();
})

const currentWeight = computed(() => useScaleStore().weight);

const formatWeight = (weight: number) => {
  return Intl.NumberFormat("pt-BR", {
    style: "unit",
    unit: "kilogram",
    maximumFractionDigits: 3,
    minimumFractionDigits: 3
  }).format(weight);
}

</script>

<template>
  <div class="grid gap-2">
    <p>Peso</p>
    <Input :value="formatWeight(currentWeight)" />
  </div>
</template>
