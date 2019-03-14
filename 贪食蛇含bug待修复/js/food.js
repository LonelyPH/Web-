;(function (window, undefined) {/* 创建一个新的作用域，防止命名冲突 */
  // 食物对象
  var _map = null;
  var _div = null;
  var _position = 'absolute';
  var foodelement = [];
  // 构造函数
  // 属性：宽  高  坐标  颜色 
  function Food (foods) {
    foods = foods || {};
    this.color = foods.backgroundColor || 'green';
    this.borderRadius = foods.borderRadius || 50;
    this.width = foods.width || 15;
    this.height = foods.height || 15;
    this.x = foods.x || 0;
    this.y = foods.y || 0;
  }
  // 方法： 渲染到页面  随机产生坐标
  Food.prototype.render = function (map) {
    // 删除前一个食物
    remove();
    var div = document.createElement('div');/* 生成食物 */
    map.appendChild(div);/* 把食物添加到地图中 */
    // 将生成的食物div记录到数组中，为之后的删除做准备
    foodelement.push(div);
    _map = map;/* 记录地图 */
    _div = div;/* 记录当前产生的食物 */
    // 设置食物（div）的样式属性
    div.style.backgroundColor = this.color;/* 颜色=当前食物对象颜色 */
    div.style.width = this.width + 'px';/* 宽度=当前对象宽度 */
    div.style.height = this.height + 'px';/* 高度=当前对象高度 */
    div.style.borderRadius = this.borderRadius + '%';

    div.style.position = _position;/* 改变坐标需要脱离文档流 这里使用绝对定位 父元素为id=map的div*/
    div.style.left = this.x + 'px';/* 横坐标=当前对象横坐标 */
    div.style.top = this.y + 'px';/* 纵坐标=当前对象纵坐标 */

  }
  Food.prototype.random = function () {
    // 判断是否获取到map
    if(!_map) return;
    // 调用Tool的随机数工具产生随机的坐标赋值给当前主调对象（div）的坐标
    this.x = Tool.getRandom(0, _map.offsetWidth / this.width - 1) * this.width;
    this.y = Tool.getRandom(0, _map.offsetHeight / this.height - 1) * this.height;
    // 让当前食物（div）的坐标=主调对象的坐标
    _div.style.left = this.x + 'px';
    _div.style.top = this.y + 'px';
  }
  // 删除食物函数
  function remove () {
    for (var i = foodelement.length -1; i >= 0; i--) {
      // 删除食物div
      foodelement[i].parentNode.removeChild(foodelement[i]);
      // 删除数组中的记录
      foodelement.splice(i,1);
    }
  }
  window.Food = Food;
}) (window, undefined)