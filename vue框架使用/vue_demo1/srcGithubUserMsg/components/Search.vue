<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName">
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
import PubSub from 'pubsub-js' //*引入PubSub
export default {
  data () {
    return {
      searchName: ""
    }
  },
  methods: {
    search () {
      const searchName = this.searchName.trim()
      if (searchName) {
        //*发布消息，通知Body组件发送ajax请求
        PubSub.publish("search", searchName)
      } else {
        alert("查询的用户名不能为空！")
      }
    }
  }
}
</script>

<style>
</style>
