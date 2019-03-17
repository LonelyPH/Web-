// JS入口
/* bug:快速点击时会重启一个定时器，而所需要的nowLeft已经改变，所以造成切换时图片位置错误
解决 设置标识isMoving 判断翻页过程是否正在进行，如果正在进行则让翻页过程中的点击失效，否则执行
翻页 */
//严格模式
'use strict'
$(function () {
  //获取所需JQ对象
  var $container = $('#container');
  var $arrowspan = $('#container>span');
  var $points = $('#pointsContainer>span');
  //定义所需变量
  var imgWidth = $('#imglist>img').width();
  var totalTime = 400;
  var stepTime = 20;
  var index = 0;
  //标志是否正在翻页
  var isMoving = false;
  // 获取应有的图片数量
  var imgCount = $points.length;
  // console.log($('#imglist>img').width());
  //鼠标移入显示翻页标签 鼠标移出隐藏翻页标签
  $container.hover(function () {
    $arrowspan.css('display', 'block');
    clearInterval(timeId);
  }, function () {
    $arrowspan.css('display', '');
    timeId = setInterval(function () {
      nextImg(false);
    }, autoTime)
  })

  //点击翻页标签切换图片
  $('#left').click(function () {
    nextImg(true);
  });
  $('#right').click(function () {
    nextImg(false);
  });
  //点击小圆点切换到对应图片
  $points.click(function () {
    //获取当前点击的圆点的索引
    var dotIndex = $(this).index();
    //判断点击的圆点是否是同一个圆点，如果是不作改变，否则切换到点击的圆点和相应图片
    if (dotIndex != index) {
      nextImg(dotIndex);
    }
  });
  //自动翻页
  var autoTime = 2000;
  var timeId = setInterval(function () {
    nextImg(false);
  }, autoTime)

  //平滑翻页函数
  function nextImg(next) {
    //判断是否正在翻页
    if (isMoving) {
      return;
    } else {
      //标识开始翻页
      isMoving = true;
    }

    var nowLeft = $('#imglist').position().left;
    var offset = 0;
    if (typeof next === 'boolean') {
      offset = next ? imgWidth : -imgWidth;
    } else {
      offset = -(next - index) * imgWidth;
    }
    var target = nowLeft + offset;
    var stepLeft = offset / (totalTime / stepTime);
    var timeId = setInterval(function () {
      nowLeft += stepLeft;
      if (nowLeft === target) {
        //标识翻页结束
        isMoving = false;
        clearInterval(timeId);
        if (nowLeft === -(imgCount + 1) * imgWidth) {
          nowLeft = -imgWidth;
        } else if (nowLeft === 0) {
          nowLeft = -imgCount * imgWidth;
        }
      }
      $('#imglist').css('left', nowLeft);
    }, stepTime)
    updataDot(next);
  }
  //同步小圆点函数
  function updataDot(next) {
    if (typeof next === 'boolean') {
      var targetIndex = 0;
      if (!next) {
        targetIndex = index + 1;
        if (targetIndex === imgCount) {
          targetIndex = 0;
        }
      } else {
        targetIndex = index - 1;
        if (targetIndex === -1) {
          targetIndex = imgCount - 1;
        }
      }
    } else {
      targetIndex = next;
    }
    $points.eq(index).removeClass('on');
    $points.eq(targetIndex).addClass('on');
    index = targetIndex;
  }
})