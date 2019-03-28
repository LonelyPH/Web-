import Vue from 'vue'
import App from './App.vue'
import router from './router'

let vm = new Vue({  //配置对象的属性名称都是固定的，不可修改
  el: "#app",
  components: {
    App
  },
  template: "<App/>",
  router
})

Vue.use(vm)