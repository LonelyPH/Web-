<template>
  <ul>
    <h5>Message的子组件</h5>
    <li>id: <span v-text="dietail.id"></span></li>
    <li>message: <span v-text="dietail.msg"></span></li>
    <li>content: <span v-text="dietail.content"></span></li>
  </ul>
</template>

<script>
  const messageDietails = [
    {id: 1, msg: "Message001", content: "msg1......"},
    {id: 2, msg: "Message002", content: "msg2......"},
    {id: 3, msg: "Message003", content: "msg3......"},
    {id: 4, msg: "Message004", content: "msg4......"}
  ]
  export default {
    data () {
      return {
        dietail: {}
      }
    },
    mounted () { //*由于改变当前组件参数时不会重新创建组件对象 mounted只执行一次
      //*定义常量存储id
      const ID = this.$route.params.id * 1 //*params参数方式
      // const ID = this.$route.query.id * 1 //*query参数方式
      setTimeout(() => {
        this.dietail = messageDietails.find(dietail => dietail.id === ID)
      }, 1000)
    },
    /*
      *#######存在BUG待解决 watch监视下$route参数一变化就会改变id,这将与上面的定时产生bug
    */
    watch: { //*监视数据$route的变化
      $route: function (value) { //*当前路由组件参数发生变化时自动调用
        setTimeout(() => {
          const ID = value.params.id * 1 //*params参数方式
          // const ID = value.query.id * 1 //*query参数方式
          this.dietail = messageDietails.find(dietail => dietail.id === ID)
        }, 1000)
      }
    }
  }
</script>

<style>
</style>
