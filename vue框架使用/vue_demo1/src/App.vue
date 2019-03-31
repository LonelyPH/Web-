<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap"><!-- 插入子组件标签 并将子组件需要的数据传递过去 -->
        <Header/>
        <Body/>
        <Foot/>
      </div>
    </div>
  </div>
</template>

<script>
//*引入子组件
import Header from "./components/Header"
import Body from "./components/Body"
import Foot from "./components/Foot"

export default {
  mounted () {
    //*读取数据 异步
    this.$store.dispatch("getWorkNames")
  },
  components: {//*映射相应子组件标签
    Header,
    Body,
    Foot
  }
}
</script>

<style>
body {
  background: #fff;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
