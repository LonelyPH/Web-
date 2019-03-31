import Vue from 'vue'
import App from './App.vue'
//*引入stroe
import store from './store'

// let vm = new Vue({
//   el: '#app',
//   components: {------------1
//     App: App
//   },
//   template: '<App/>', ---------2
//   store
// })
let vm = new Vue({
  el: '#app',
  render: h => h(App), //*相当于上面注释的1+2
  store
})
Vue.use(vm)
