Vue.filter('timeFormat',function (timeData) {
  var time = new Date(timeData);/* 根据给定的时间字符串，得到相应的时间 */
  // 获取时间中的年份
  var year = time.getFullYear();
  // 获取时间中的月份
  var month = (time.getMonth() + 1).toString().padStart(2, 0);
  // 获取时间中的日期
  var day = time.getDate().toString().padStart(2, 0);
  // 获取时间中的小时
  var hour = time.getHours().toString().padStart(2, 0);
  // 获取时间中的分钟
  var minute = time.getMinutes().toString().padStart(2, 0);
  // 获取时间中的秒
  var second = time.getSeconds().toString().padStart(2, 0);

  // 返回格式化的时间
  return `${year}.${month}.${day}.${hour}:${minute}:${second}`;
})
// 自定义全局指令:Vue.directive('参数1'，参数2) 其中参数1是指令名称 参数2是一个对象 调用时必须在指令名称前加v-
Vue.directive('focus',{
  //bind: function (el) {/* 每当指令绑定到元素上时，立即执行bind后面的函数 只执行一次 */
  // // 每个函数中的第一个参数都是el，el表示被绑定了相应指令的那个元素 el是JS原生对象 及原生DOM
  // // el.focus();/*此方法在bind中不适用 因为 当元素绑定指令时，还保存在内存中，没有插入到dom树，只有插入到dom中才能执行获取焦点 */
  // },
  inserted: function (el) {/* 元素插入到DOM中时，执行一次inserted后面的函数 只执行一次 */
    el.focus();
  },
  // updated: function(el) {/* 当VNode更新时，执行update后的函数  可能会执行多次 */
  //   el.focus();
  // }
  })

// 实例
var vm = new Vue ({
el: '#app',
data: {
  id: '',
  name: '',
  keywords: '',
  list: [
    // {id: 1, name: '奔驰', ctime: new Date() },
    // {id: 2, name: '宝马', ctime: new Date() }
  ]
},
methods: {
  add () {
    // 获取ID和Name
    // 组成一个对象
    // 将对象添加到data的list中
    var car = {
      id: this.id,
      name: this.name,
      ctime: new Date()
    }
    this.list.push(car);
    //清空输入框
    this.id = this.name = '';
  },
  del (id) {/* 根据id找到并删除相应项 */
    // this.list.some((item, i) => {
    //   if (item.id ==id) {
    //     this.list.splice(i, 1);
    //     // 数组的some方法返回true来终止后续循环
    //     return true;
    //   }
    // })
    var i = this.list.findIndex(item => {
      if (item.id == id) {
        return true;
      }
    })
    this.list.splice(i, 1);
  },
  search (keywords) {/* 根据关键字搜索数据 */
    var newList = [];
    
    // 通过forEach遍历数组中的每一项  item代表循环的每一项
    // this.list.forEach(item => {
    //   if (item.name.indexOf(keywords) != -1) {
    //     newList.push(item);
    //   }
    // });
    // return newList;

    // 通过filter遍历数组的每一项 item代表循环的每一项
    this.list.filter (item => {
      if (item.name.includes(keywords)) {
        newList.push(item);
      }
    })
    return newList;
  },
}
});