;(function (window, undefined) {
  // 蛇对象
  var _position = 'absolute';
  var snakeelement = [];
  // 属性： 每一小段的 宽默认15 高默认15 头部颜色默认红色 身体
  // 方法： 渲染到地图上   移动move
  // 构造函数 蛇
  function Snake (snake) {
    snake = snake || {};
    this.width = snake.width || 15;
    this.height = snake.height || 15;
    this.borderRadius = snake.borderRadius || 50;
    this.direction = snake.direction || 'right';
    this.body = [
      {x: 3, y: 2, color: 'lightgreen'},
      {x: 2, y: 2, color: 'green'},
      {x: 1, y: 2, color: 'green'}
    ];
  }
  // 方法:
  // 1、渲染到页面
  Snake.prototype.render = function (map) {
    // 删除之前的蛇对象
    remove();
    var that = this;/* 记录当前作用域的this */
    this.body.forEach(function (item) {
      var div = document.createElement('div');
      // 向地图添加蛇节
      map.appendChild(div);
      // 记录蛇节 为后面的删除做准备
      snakeelement.push(div);
      // 设置蛇节的样式
      div.style.width = that.width +'px';
      div.style.height = that.height + 'px';
      div.style.borderRadius = that.borderRadius + '%';

      div.style.position = _position;
      div.style.left = item.x * that.width + 'px';
      div.style.top = item.y * that.height + 'px';

      div.style.backgroundColor = item.color;

    });
  }
  // 删除蛇节函数
  function remove () {
    for (var i = snakeelement.length - 1; i >=0; i--) {
      snakeelement[i].parentNode.removeChild(snakeelement[i]);
      snakeelement.splice(i, 1);
    }
  }

  // 2、移动move
  Snake.prototype.move = function (food, map) {
    // （2）蛇身 后一段移动到前一段的位置
    for (var i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    // （1）蛇头移动 方向
    var head = this.body[0];
    switch(this.direction) {
      case 'right':
        head.x += 1;
        break;
      case 'left':
        head.x -= 1;
        break;
      case 'top':
        head.y -= 1;
        break;
      case 'bottom':
        head.y += 1;
        break;
    }
    var headX = head.x * this.width;
    var headY = head.y * this.height;

    if(food.x == headX && food.y == headY) {
      // 吃掉食物后，蛇节加1
      var last = this.body[this.body.length - 1];
      // this.body.push({
      //   x: last.x,
      //   y: last.y,
      //   color: last.color
      // });
      // 使用对象拷贝
      var obj = {};
      Tool.extend(last, obj);
      this.body.push(obj);
      // 当食物被吃掉后生成新食物
      food.render(map);
      food.random();
    }
  }
 
  window.Snake = Snake;
}) (window, undefined)