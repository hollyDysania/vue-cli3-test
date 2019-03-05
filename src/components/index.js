import Vue from 'vue'

// 自动加载 global目录下 .js 结尾的文件
const componentContext = require.context('./global', true, /\.js$/)
componentContext.keys().forEach(component => {
  const componentConfig = componentContext(component)
  const com = componentConfig.default || componentConfig
  // 全局注册组件
  Vue.component(com.name, com)
})
