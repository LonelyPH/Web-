<template> <!-- 为li标签绑定事件  *此处不适用mouseover和mouseout事件  -->    <!-- 给li标签绑定需要变换的style样式 -->
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: liBgc}">
    <label>
      <input type="checkbox" v-model="workName.state">
      <span v-text="workName.work"></span>
    </label>
    <button class="btn btn-danger" @click="removeWork(index)" v-if="flag">删除</button>
  </li>
</template>

<script>
export default {
  props: {    //*从父组件接受数据 指定数据名 数据类型
    workName: Object,
    index: Number,
    removeWorkName: Function
  },
  data () {
    return {
      liBgc: "#fff",
      flag: false
    }
  },
  methods: {    //*方法
    removeWork (index) {    //*通过索引，删除一个选定的任务  当点击删除按钮时调用此方法
      if (confirm(`确定删除${this.workName.work}吗？`)) {
        this.removeWorkName(index)
      }
    },
    handleEnter (isEnter) {   //*处理鼠标出入li标签的方法，当鼠标进入或离开li标签时调用 改变li标签背景色 以及显示或隐藏删除按钮
      if (isEnter) {
        this.liBgc = "orange"
        this.flag = isEnter
      } else {
        this.liBgc = "#fff"
        this.flag = isEnter
      }
    }
  }
}
</script>

<style>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
