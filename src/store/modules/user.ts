import { defineStore } from 'pinia'

export const useUserStore = defineStore('User', {
  state: () => {
    return {
      count: 1,
    }
  },
  actions: {},
  getters: {},
})
