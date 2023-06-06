import Layout from '@/layouts/index.vue'

const constantRoute = [
  {
    path: '/',
    redirect: '/index',
    name: 'Layout',
    component: Layout,
    children: [
      // 首页
      {
        path: '/index',
        name: 'HomeIndex',
        component: () => import('@/views/Home/index.vue'),
      },
    ],
  },
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/404.vue'),
  },
]

export default constantRoute
