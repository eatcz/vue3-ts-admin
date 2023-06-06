// 布局类型
export type LayoutType = 'vertical' | 'classic' | 'transverse' | 'columns'

export type LanguageType = 'zh' | 'en' | null

// 全局状态
export interface GlobaalState {
  layout: LayoutType
  language: LanguageType
  //   全屏显示
  maxsize: boolean
  //   是否开启暗黑模式
  isDark: boolean

  //   折叠菜单
  isCollapse: boolean
  // 是否显示侧边栏Logo
  isShowSideLogo: boolean
}
