<template>
  <div>
    <div class="col-md-8">
      <h3 class="reply">评论回复：</h3>
      <h2 style="display: none">暂无评论，点击左侧添加评论！！！</h2>
      <ul class="list-group">
        <!-- :comment="comment" 将comments属性传递给Item组件 -->
        <Item v-for="(comment, index) in comments" :key="index" :comment="comment" :remove="remove" :index="index"/>
      </ul>
    </div>
  </div>
</template>

<script>
  import Item from './Item.vue'
  export default {
    //声明接收从父组件传来的属性，此属性将成为组件对象的属性
    props: ["comments", "remove"],
    components: {
      Item: Item
    }
  }
</script>

<style>
  .reply {
    margin-top: 0px;
  }
</style>