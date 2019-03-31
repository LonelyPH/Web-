<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="ischooseAll">
    </label>
    <span>
      已完成<span v-text="doneWorks"></span> / 全部 <span v-text="totalCount"></span>
    </span>
    <button class="btn btn-danger" @click="clearDone" v-if="doneWorks">清除已完成任务</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  methods: {  //*方法
    clearDone () {  //*删除选中项 即已完成的任务
      //*提示是否确定删除
      if (confirm(`确定删除选中的任务吗？`)) {
        //*vuex 触发actions清除所有已选项
        this.$store.dispatch("clearAllDone")
      }
    }
  },
  computed: {   //*计算属性
    //*将store中的getters映射到计算属性   vuex
    ...mapGetters(["doneWorks", "totalCount"]),

    ischooseAll: {  //*全选或全不选的计算属性
      get () {    //*读取需要与当前计算属性关联的数据，并通过关联的数据改变当前计算属性的值
        return this.$store.getters.ischooseAll //*vuex
      },
      set (value) {   //*监听当前计算属性的状态，通过当前计算属性状态的变化改变相应数据
        this.$store.dispatch("chooseAll", value) //*vuex
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
