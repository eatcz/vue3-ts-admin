import { createRouter, createWebHistory } from 'vue-router'
import constantRoute from './constantRoute'
// const routes = [
//   {
//     path: '/redirect',
//     component: Layout,
//     meta: {
//       hidden: true,
//     },
//     children: [
//       {
//         path: '/redirect/:path(.*)',
//         component: () => import('@/views/redirect/index.vue'),
//       },
//     ],
//   },
//   {
//     path: '/',
//     name: 'Layout',
//     component: () => import('@/layouts/index.vue'),
//   },
//   // 登录
//   {
//     path: '/login',
//     name: 'Login',
//     component: () => import('@/views/Login/index.vue'),
//   },
//   {
//     path: '/404',
//     name: 'NotFound',
//     component: () => import('@/views/404.vue'),
//   },
// ]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoute,
})

export default router
