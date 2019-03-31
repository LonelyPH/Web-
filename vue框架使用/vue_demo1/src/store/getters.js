/*
*getters 基于state的所有计算属性的对象
*/
export default {
  //*获取workNames总数
  totalCount (state) {
    return state.workNames.length
  },
  //*已选个数 计算属性 通过数组的reduce方法计算已选项个数
  doneWorks (state) {
    return state.workNames.reduce((total, workName) => total + (workName.state ? 1 : 0), 0)
  },
  //*读取需要与当前计算属性关联的数据，并通过关联的数据改变当前计算属性的值
  ischooseAll (state, getters) {
    return state.workNames.length === getters.doneWorks && getters.doneWorks > 0
  }
}