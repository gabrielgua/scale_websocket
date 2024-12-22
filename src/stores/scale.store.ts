import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { useWebSocketStore } from './websocket.store'

export const useScaleStore = defineStore('scale', () => {
  const weight = ref(0)
  const data = computed(() => useWebSocketStore().data)

  watch(
    () => data.value,
    () => {
      weight.value = Number.parseFloat(data.value)
    },
  )

  return { weight }
})
