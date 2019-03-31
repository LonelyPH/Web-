<template>
  <div>
    <ul>
      <h5>Home的子路由组件Message</h5>
      <li v-for="message in messages" :key="message.id">
        <!-- params参数方法 -->
      <router-link :to="`/home/message/list/${message.id}`" v-text="message.msg"></router-link>
      <!-- query参数方法 -->
      <!-- <router-link :to="`/home/message/list?id=${message.id}`" v-text="message.msg"></router-link> -->

      <button @click="pushShow(message.id)">push查看</button><button @click="replaceShow(message.id)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messages: []
    }
  },
  //*模拟异步发送Ajax
  mounted () {
    setTimeout(() => {
      const messages = [
        { id: 1, msg: "Message001" },
        { id: 2, msg: "Message002" },
        { id: 3, msg: "Message003" },
        { id: 4, msg: "Message004" }
      ]
      this.messages = messages
    }, 1000)
  },
  methods: { //编码式路由导航
    pushShow (id) {
      this.$router.push(`/home/message/list/${id}`)
    },
    replaceShow (id) {
      this.$router.replace(`/home/message/list/${id}`)
    }
  }
}
</script>

<style>
</style>
