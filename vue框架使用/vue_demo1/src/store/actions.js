/*
*actions 方法对象
*/

//*引入mutation-types
import {ADD, REMOVE_WORKNAME, CLEAR_ALLDONE, CHOOSE_ALL, GET_WORKNAMES} from './mutation-types'


export default {
  //*添加work  Header需要
  add ({commit}, workName) {
    commit(ADD, {workName})
  },
  //*删除当前work  Body的子组件Item需要用
  removeWorkName ({commit}, index) {
    commit(REMOVE_WORKNAME, {index})
  },
  //*清除所有已经完成的任务（所有已选项） 组件Foot需要
  clearAllDone ({commit}) {
    commit(CLEAR_ALLDONE)
  },
  //*监听当前计算属性的状态，通过当前计算属性状态的变化改变相应数据
  chooseAll ({commit}, choose) {
    commit(CHOOSE_ALL, {choose})
  },
  //*读取本地数据
  getWorkNames ({commit}) {
    //*模拟向服务器请求数据
    setTimeout(() => {
      //*读取本地数据，并将JSON格式的数据转换成JS的格式
      const workNames = JSON.parse(localStorage.getItem("workNames_key") || "[]")
      commit(GET_WORKNAMES, {workNames})
    }, 1000)
  }
}