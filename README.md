# vue cli3项目搭建

## 安装cli3

```javascript
npm install -g @vue/cl
```

## 初始化项目

```javascript
vue create vue-cli3-test
```

- 选择预设 `选择更多功能`
  - 默认预设包含babel, eslint
  - manually select features 更多功能

- 选择插件
  - babel
  - router
  - vuex
  - css预处理器
  - linter / formatter

（暂且选择这些）

`等待生成文件完成后npm run serve本地运行`

## 路由模块化自动引入

根据业务模块进行拆分

- 新建 router文件夹进行统一管理
- 新建index.js负责统一管理模块路由
  - 由于业务一般模块比较庞大 每次新开一个模块就要导入一次到index.js，因此优化index.js自动扫描全局子模块路由并导入

## 全局组件自动注册

- components文件夹下创建global以及index.js

- index.js对global文件夹下的js文件加载并全局注册

- 最后将index.js引入到main.js中

## axios封装

- 安装axios

- 根目录创建.env .env.test .env.prod 环境变量
- 根目录创建vue.config.js 配置不同环境的BASE_URL
- src下创建api文件夹，创建一个index.js配置axios
  - 请求拦截 
  - 响应拦截
    - 不同错误状态码处理
    - 断网超时处理
    - 请求显示loading(自己根据业务来看)

其他根据业务需求而定...