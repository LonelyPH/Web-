<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap"><!-- 插入子组件标签 并将子组件需要的数据传递过去 -->
        <Header :workNames="workNames" :add="add"/>
        <Body :workNames="workNames" :removeWorkName="removeWorkName"/>
        <Foot :workNames="workNames" :clearAllDone="clearAllDone" :isSelectAll="isSelectAll"/>
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
  data () {
    return {    //*从本地读取JSON数据 并转换成JS数据
      workNames: JSON.parse(localStorage.getItem("workNames_key") || "[]")
    }
  },
  methods: {
    //*添加work  Header需要
    add (workName) {
      this.workNames.push(workName)
    },
    //*删除当前work的方法  子组件Body的子组件Item需要用
    removeWorkName (index) {
      this.workNames.splice(index, 1)
    },
    //*清除所有已经完成的任务（所有已选项） 子组件Foot需要
    clearAllDone () {
      this.workNames = this.workNames.filter(workName => !workName.state)
    },
    //*判断是否全选   子组件Foot需要
    isSelectAll (value) {
      this.workNames.forEach(function (workName) {
        workName.state = value
      })
    }
  },
  watch: {    //*监视
    workNames: {
      deep: true,  //*深度监视
      handler: function (newValue) {    //*将当前最新的数据以JSON格式存储到本地
        localStorage.setItem("workNames_key", JSON.stringify(newValue))
      }
    }
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
