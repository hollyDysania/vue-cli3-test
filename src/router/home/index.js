// 关于模块路由
export default [{
  path: '/',
  name: 'home',
  component: () => import('@/views/home.vue')
}]
