import Layout from '@/layouts/index.vue'

const constantRoute = [
  {
    path: '/',
    redirect: '/index',
    name: 'Layout',
    component: Layout,
    meta: { title: '哈哈哈' },
    children: [
      // 首页
      {
        path: '/index',
        name: 'HomeIndex',
        component: () => import('@/views/Home/index.vue'),
        meta: { title: '首页', hidden: false },
      },
    ],
  },
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
    meta: { title: '登录', hidden: true },
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/404.vue'),
    meta: { title: '404', hidden: true },
  },
]

export default constantRoute
