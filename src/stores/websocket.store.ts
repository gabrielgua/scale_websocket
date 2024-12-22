import { useWebSocket } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useWebSocketStore = defineStore('websocket', () => {
  const CLIENT_IP = '200.96.3.128'

  const WEBSOCKET_URL = `ws://localhost:8765/${CLIENT_IP}`
  const { status, data, send, open, close } = useWebSocket(WEBSOCKET_URL, {
    autoReconnect: {
      retries: 3,
      delay: 1000,
      onFailed() {
        console.log('Connection failed after 3 retries.')
      },
    },
    onConnected() {
      console.log('Connected to websocket server.')
    },
    onDisconnected() {
      console.log('Disconnected from websocket server.')
    },
  })

  return { status, data, send, open, close }
})
