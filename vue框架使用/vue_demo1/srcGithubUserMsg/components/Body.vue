<template>
  <div>
    <h2 v-if="firstView">输入用户名查询用户信息</h2>
    <h2 v-if="loadingView">Loading...</h2>
    <h2 v-if="defeatedMsg" v-text="defeatedMsg"></h2>
    <div class="row" v-if="succeedUsersData">
      <div class="card" v-for="(userData, index) in succeedUsersData" :key="index">
        <a :href="userData.url" target="_blank">
          <img :src="userData.avatar_src" style="width: 100px">
        </a>
        <p class="card-text" v-text="userData.name"></p>
      </div>
    </div>
  </div>
</template>

<script>
import PubSub from "pubsub-js" //*引入PubSub
import axios from "axios" //*引入axios
export default {
  data () {
    return {
      firstView: true,
      loadingView: false,
      succeedUsersData: null, //* [{name: "", url: "", avatar_src: ""}]
      defeatedMsg: ""
    }
  },
  mounted () {
    //*订阅Search组件要搜索的消息
    PubSub.subscribe("search", (mag, searchName) => {
      //*初始化数据
      this.succeedUsersData = null
      this.defeatedMsg = ""
      //*loadingView的显示状态
      this.firstView = false
      this.loadingView = true
      //*用axios发送ajax请求
      const url = `https://api.github.com/search/users?q=${searchName}`
      axios
        .get(url)
        .then(response => {
          //console.log(response.data)
          //*数组的map函数对数组的每一个元素执行回调并将回调的结果组成新数组返回
          const succeedUsersData = response.data.items.map(item => ({
            name: item.login,
            url: item.html_url,
            avatar_src: item.avatar_url
          }))
          //*成功获取数据后的状态
          this.loadingView = false
          this.succeedUsersData = succeedUsersData
          // console.log(this.succeedUsersData)
          //*无相应数据时的状态
          if (this.succeedUsersData.length === 0) {
            this.defeatedMsg = "没有使用此用户名的用户！"
          }
        })
        .catch(error => { //*请求失败的状态
          this.loadingView = false
          this.defeatedMsg = error + "请求失败,请稍后重试！"
        })
    })
  }
}
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
