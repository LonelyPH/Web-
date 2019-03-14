;(function (window, undefined) {
  // 游戏逻辑  对象
  // 属性：蛇  食物  map
  // 方法啊：开始
  var that = null;
  // 构造函数
  function Game (map) {
    this.snake = new Snake();
    this.food = new Food();
    this.map = map;
    that = this;
  }
  // 方法：开始游戏

  Game.prototype.start = function () {
    // 将游戏中的元素渲染到页面
    // this.food.render(this.map);
    // this.food.random();
    // this.snake.render(this.map);
    // 让蛇移动并渲染同时判断是否撞墙
    runSnake();
    // 控制方向
    keyControl();

    this.food.render(this.map);
    this.food.random();
    this.snake.render(this.map);
   }




  //  创建定时器函数 让蛇移动
  function runSnake() {
    var timeId = setInterval(function () {
      that.snake.move(that.food, that.map);
      that.snake.render(that.map);

      var headX = that.snake.body[0].x;
      var headY = that.snake.body[0].y;
      // 判断是否撞墙
      if (headX < 0 || headY < 0) {
        clearInterval(timeId);
        alert('Game Over');
        return;
      }

      var maxX = that.map.offsetWidth / that.snake.width;
      var maxY = that.map.offsetHeight / that.snake.height;

      if ( headX > maxX || headY >maxY) {
        clearInterval(timeId);
        alert('Game Over');
        return;
      }
      that.snake.render(that.map);
      // for (var i = 4; i < that.snake.body.length - 1; i++) {
      //   if (that.snake.body[i].x === headX || that.snake.body[i].y === headY) {
      //     alert('Game Over');
      //     clearInterval(timeId);
      //   }
      // }
    }, 200)
  }
  // 创建方向控制函数
  function keyControl () {
    document.addEventListener('keydown',function (e) {
      e = e || event;
      // left 37 top 38 right 39 bottom 40
      switch(e.keyCode) {
        case 37: 
          if (that.snake.direction === 'right') return;
          that.snake.direction = 'left';
          break;
        case 38: 
          if (that.snake.direction === 'bottom') return;
          that.snake.direction = 'top';
          break;
        case 39: 
          if (that.snake.direction === 'left') return;
          that.snake.direction = 'right';
          break;
        case 40: 
          if (that.snake.direction === 'top') return;
          that.snake.direction = 'bottom';
          break;
      }
    });
  }

  window.Game = Game;
}) (window, undefined)