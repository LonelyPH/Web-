<template>
  <ul class="todo-main">    <!-- 插入子组件标签 并将子组件所需数据传递过去 -->
    <!-- <Item v-for="(workName, index) in workNames" :key="index" :index="index" :workName="workName" :removeWorkName="removeWorkName"/> -->
    <Item v-for="(workName, index) in workNames" :key="index" :index="index" :workName="workName"/>
  </ul>
</template>

<script>
import { mapState } from "vuex"
import Item from "./Item"

export default {
  computed: {
    //*vuex 将store中的状态数据映射到计算属性
    ...mapState(["workNames"])
  },
  watch: {    //*监视
    workNames: {
      deep: true,  //*深度监视
      handler: function (newValue) {    //*将当前最新的数据以JSON格式存储到本地
        localStorage.setItem("workNames_key", JSON.stringify(newValue))
      }
    }
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
