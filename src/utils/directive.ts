// 自定义插件
// 用于注册全局组件
import SvgIcon from '@/components/SvgIcon/index.vue'
import type { App, Component } from 'vue'
const components: { [name: string]: Component } = { SvgIcon }
export default {
  install(app: App) {
    // 遍历批量注册组件
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  },
}
