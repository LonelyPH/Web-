<template>
  <ul>
    <h5>Home的子路由组件Message</h5>
    <li v-for="message in messages" :key="message.id">
      <a href="#" v-text="message.msg"></a>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      messages: []
    }
  },
  //模拟异步发送Ajax
  mounted () {
    setTimeout(() => {
      const messages = [
        {id: 1, msg: "Message001"},
        {id: 2, msg: "Message002"},
        {id: 3, msg: "Message003"},
        {id: 4, msg: "Message004"}
      ]
      this.messages = messages
    }, 1000)
  }
}
</script>

<style>
</style>
