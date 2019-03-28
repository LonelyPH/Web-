import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由组件
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Message from '../views/Message.vue'

Vue.use(VueRouter)
//创建路由器对象
export default new VueRouter({
  //配置路由
  routes: [
    {
      path: "/",
      redirect: "/about"
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "message",
          component: Message
        },
        {
          path: "/home/news",
          component: News
        },
        {
          path: "/home/",
          redirect: "/home/news"
        }
      ]
    }
  ]
})