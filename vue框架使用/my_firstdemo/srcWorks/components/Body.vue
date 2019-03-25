<template>
  <ul class="todo-main">    <!-- 插入子组件标签 并将子组件所需数据传递过去 -->
    <Item v-for="(workName, index) in workNames" :key="index" :index="index" :workName="workName" :removeWorkName="removeWorkName"/>
  </ul>
</template>

<script>
import Item from "./Item"
export default {
  props: {    //*从父组件接受数据 指定数据名 数据类型
    workNames: Array,
    removeWorkName: Function
  },
  components: {   //*将子组件映射为标签
    Item
  }
}
</script>

<style>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
