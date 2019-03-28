import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由组件
import About from '../views/About.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
//创建路由器对象
export default new VueRouter({
  //配置路由
  routes: [
    {
      path: "/",
      component: About
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/home",
      component: Home
    }
  ]
})