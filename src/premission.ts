import router from './router'
import { useUserStore } from '@/store/modules/user'
import pinia from './store'
import nprogress from 'nprogress'
// import whileList from '@/config'
const userStore = useUserStore(pinia)
const whileList = ['/login']

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    setTitle(to.meta.title)
  }
  //   console.log(to)
  const TOKEN = userStore.token
  if (to.path == '/login') {
    if (TOKEN) {
      next({
        path: '/',
        replace: true,
      })
    } else {
      next()
    }
  } else {
    if (whileList.indexOf(to.path) == -1) {
      if (TOKEN) {
        console.log(123)
        next()
      } else {
        console.log(456)
        next({
          path: '/login',
          replace: true,
        })
      }
    } else {
      next()
    }
  }
})

const setTitle = (TITLE: string) => {
  const baseTitle = import.meta.env.VITE_APP_TITLE
    ? import.meta.env.VITE_APP_TITLE
    : '后台管理系统'
  window.document.title = TITLE ? TITLE : baseTitle
}
