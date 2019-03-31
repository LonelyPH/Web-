/*
*mutations 供actions调用的方法对象
*/

//*引入mutation-types
import {ADD, REMOVE_WORKNAME, CLEAR_ALLDONE, CHOOSE_ALL, GET_WORKNAMES} from './mutation-types'

export default {
  //*添加work  Header需要
  [ADD] (state, {workName}) {
    state.workNames.push(workName)
  },
  //*删除当前work  Body的子组件Item需要用
  [REMOVE_WORKNAME] (state, {index}) {
    state.workNames.splice(index, 1)
  },
  //*清除所有已经完成的任务（所有已选项） 组件Foot需要
  [CLEAR_ALLDONE] (state) {
    state.workNames = state.workNames.filter(workName => !workName.state)
  },
  //*监听当前计算属性的状态，通过当前计算属性状态的变化改变相应数据
  [CHOOSE_ALL] (state, {choose}) {
    state.workNames.forEach(workName => { workName.state = choose })
  },
  //*读取本地数据用于页面显示
  [GET_WORKNAMES] (state, {workNames}) {
    state.workNames = workNames
  }
}