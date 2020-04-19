# vue-music

> vue2 + vue-router2 +vuex + jsonp + es6 +webpack 抓取真实数据的移动端QQ音乐

## 项目截图
<img width="414" src="https://github.com/angelgigi/vue-music/blob/master/gif/vue-music.gif">

## 技术栈
#### 前端
- Vue：：用于构建用户界面的 MVVM 框架
- Vue-Router：路由系统
- Vuex：Vue集中状态管理，用于多个组件间共享状态
- ES6：解构赋值、promise、Class、模块化

#### 后端
- Node.js:利用 Express 起一个本地测试服务器
- jsonp：服务端通讯，抓取 QQ音乐(移动端)数据
- axios：服务端通信，结合Node.js代理后端请求抓取数据

#### 自动化构建工具
- webpack：项目编译打包
- vue-cli：Vue脚手架工具，快速搭建项目

## 安装与运行
``` 
git clone https://github.com/angelgigi/vue-music.git

cd vue-music

npm install //安装依赖

npm run dev //服务端运行 访问 http://localhost:8080

npm run build  //项目打包 
```
