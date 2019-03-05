import Vue from 'vue'
import Router from 'vue-router'
// 引入模块
// import Home from './home'
// import About from './about'

Vue.use(Router)
// ------------ 优化子模块导入路由 start--------------
let routes = []

const routerContext = require.context('./', true, /index\.js$/)
routerContext.keys().forEach(route => {
  // 如果是根目录的index.js 不处理
  if (route.startsWith('./index')) {
    return
  }
  const routerModule = routerContext(route)
  routes = [...routes, ...(routerModule.default || routerModule)]
})
// ------------ 优化子模块导入路由 end----------------
export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})
