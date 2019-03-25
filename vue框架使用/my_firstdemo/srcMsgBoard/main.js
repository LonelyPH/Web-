import Vue from 'vue'
import App from './App.vue'

let vm = new Vue({
  el: '#app',
  components: {
    App: App
  },
  template: '<App/>'
})
Vue.use(vm)
