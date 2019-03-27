<template>
  <div>
      <li class="list-group-item">
        <div class="handle">
          <a href="javascript:;" @click="removeItem">删除</a>
        </div>
        <p class="user">
          <span v-text="comment.name"></span>
          <span>说:</span>
        </p>
        <p class="centence" v-text="comment.content"></p>
      </li>
  </div>
</template>

<script>
export default {
  props: {
    //声明接收属性 指定属性名和属性值的类型
    comment: Object,
    remove: Function,
    index: Number
  },
  methods: {
    removeItem () {
      const { comment, remove, index } = this
      if (confirm(`确定删除${comment.name}的评论吗？`)) {
        remove(index)
      }
    }
  }
}
</script>

<style>
li {
  overflow: hidden;
}

li:hover {
  background-color: orangered;
  transition: all 1s ease;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>