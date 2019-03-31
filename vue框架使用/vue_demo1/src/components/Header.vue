<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="work" @keyup.enter="addWork">
  </div>
</template>

<script>
export default {
  data () {
    return {
      work: ''
    }
  },
  methods: {    //方法
    addWork () {    //添加任务的方法  当在输入框中输入任务名称并按回车键后调用
      const work = this.work.trim()
      if (!work) {
        alert("要添加的work不能为空！")
        return
      }
      const workName = {
        state: false,
        work
      }
      //* vuex 触发actions
      this.$store.dispatch("add", workName)
      this.work = ''
    }
  }
}
</script>

<style>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
