<template>
  <ul>
    <h5>Home的子路由组件News</h5>
    <li v-for="(news, index) in newsArr" :key="index" v-text="news"></li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      newsArr: ["news001", "news002", "news003"]
    }
  }
}
</script>

<style>
</style>
