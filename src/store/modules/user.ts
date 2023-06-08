import { defineStore } from 'pinia'
import constantRoute from '@/router/constantRoute'
import type { UserState } from '../types/user'
export const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: '123',
      menus: constantRoute,
    }
  },
  actions: {
    login(loginInfo) {},
  },
  getters: {},
})
