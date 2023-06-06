import { defineStore } from 'pinia'
import { GlobaalState } from '../types/global'
export const useGlobalStore = defineStore('Global', {
  state: (): GlobaalState => {
    return {
      // 布局模式
      layout: 'vertical',
      //   当前系统语言
      language: null,
      maxsize: false,
      // 是否显示暗黑模式
      isDark: false,
      // 是否折叠
      isCollapse: false,
      // 是否显示侧边栏LOGO
      isShowSideLogo: true,
    }
  },
  actions: {},
  getters: {},
})
