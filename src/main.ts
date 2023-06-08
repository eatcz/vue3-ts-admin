import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
// 引入svg插件
import 'virtual:svg-icons-register'
//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'
import router from './router'
import pinia from './store'
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 引入自定义插件
import globalComponent from '@/utils/directive'
app.use(globalComponent)
app.use(pinia)
app.use(router)
// 引入路由鉴权
import '@/premission'
app.mount('#app')
// createApp(App).mount('#app')
