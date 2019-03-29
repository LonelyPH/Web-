import Vue from 'vue'
import VueRouter from 'vue-router'
/*
 *路由组件引入
 */
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Message from '../views/Message.vue'
import MessageList from '../views/MessageList.vue'

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
          path: "/home/message",
          component: Message,
          children: [
            {
              path: "/home/message/list/:id", //:id占位符 params参数方式
              // path: "/home/message/list", //query参数方式
              component: MessageList
            }
          ]
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