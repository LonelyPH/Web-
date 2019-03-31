<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="ischooseAll">
    </label>
    <span>
      已完成<span v-text="doneWorks"></span> / 全部 <span v-text="workNames.length"></span>
    </span>
    <button class="btn btn-danger" @click="clearDone" v-if="doneWorks">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: {    //*从父组件接受数据 指定数据名 数据类型
    workNames: Array,
    clearAllDone: Function,
    isSelectAll: Function
  },
  methods: {  //*方法
    clearDone () {  //*删除选中项 即已完成的任务
      this.clearAllDone()
    }
  },
  computed: {   //*计算属性
    doneWorks () {    //*已选个数 计算属性 通过数组的reduce方法计算已选项个数
      return this.workNames.reduce((total, workName) => total + (workName.state ? 1 : 0), 0)
    },
    ischooseAll: {  //*全选或全不选的计算属性
      get () {    //*读取需要与当前计算属性关联的数据，并通过关联的数据改变当前计算属性的值
        return this.workNames.length === this.doneWorks && this.doneWorks > 0
      },
      set (value) {   //*监听当前计算属性的状态，通过当前计算属性状态的变化改变相应数据
        this.isSelectAll(value)
      }
    }
  }
}
</script>

<style>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
