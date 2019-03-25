<template>
  <div id="app">
    <div>
      <header class="site-header jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>请发表对Vue的评论</h1>
            </div>
          </div>
        </div>
      </header>

      <div class="container">
        <Add :addComment="addComment"/>
        <List :comments="comments" :remove="remove"/><!-- :comments="comments" 将comments属性传递给List组件 -->
      </div>
    </div>
  </div>
</template>

<script>
import Add from "./components/Add"
import List from "./components/List"
export default {
  data () {
    return {  //数据在哪个组件，更新数据的行为就定义在哪个组件
      comments: [
        {
          name: "Bob",
          content: "Bob的评论。。。。"
        },
        {
          name: "Tom",
          content: "Tom的评论。。。。"
        },
        {
          name: "Mary",
          content: "Mary的评论。。。。"
        }
      ]
    }
  },
  methods: {
    //添加评论 将comment对象 添加到comments数组中
    addComment (comment) {
      this.comments.unshift(comment)//unshift添加到第一个
    },
    //删除指定下标的评论
    remove (index) {
      this.comments.splice(index, 1)
    }
  },
  components: {
    Add: Add,
    List: List
  }
}
</script>

<style>
</style>