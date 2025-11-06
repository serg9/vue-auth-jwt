import { defineStore } from 'pinia'
import authService from '../services/authService'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: authService.getToken(),
    user: authService.getUser()
  }),
  getters: {
    isAuthenticated: (state) => Boolean(state.token)
  },
  actions: {
    async login(email, password) {
      const { token, user } = await authService.login(email, password)
      this.token = token
      this.user = user
    },
    logout() {
      authService.logout()
      this.token = null
      this.user = null
    }
  }
})


