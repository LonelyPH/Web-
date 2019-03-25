<template>
  <div>
    <div class="col-md-4">
      <form class="form-horizontal">
        <div class="form-group">
          <label>用户名</label>
          <input type="text" class="form-control" placeholder="用户名" v-model="name">
        </div>
        <div class="form-group">
          <label>评论内容</label>
          <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addComment: {   //指定了接收的属性名、属性值的类型以及必要性
      type: Function,
      required: true
    }
  },
  data () {
    return {
      name: '',
      content: ''
    }
  },
  methods: {
    add () {
      //检测输入信息的合法信
      /* 清除数据收尾的空格 */
      const name = this.name.trim()
      const content = this.content.trim()
      if (!name || !content) {
        alert('用户名和内容不能为空！')
        return
      }
      //将取得的数据封装成comment对象
      const comment = {
        name,
        content
      }
      //将comment对象添加到comments中
      this.addComment(comment)
      //清除输入框中的数据
      this.name = ''
      this.content = ''
    }
  }
}
</script>

<style>
</style>