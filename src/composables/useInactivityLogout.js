import { watch } from 'vue'
import { useIdle } from '@vueuse/core'
import { useAuth } from './useAuth'

export function useInactivityLogout(timeout = 5 * 60 * 1000) {
  const { isAuthenticated, logout } = useAuth()
  const { idle } = useIdle(timeout)

  watch(idle, (isIdle) => {
    if (isIdle && isAuthenticated.value) {
      logout()
      alert('Session expired due to inactivity.')
    }
  })

  return {
    idle,
  }
}
