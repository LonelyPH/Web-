// JS入口

$(function () {
  //获取所需JQ对象
  var $container = $('#container');
  var $arrowspan = $('#container>span');
  var $points = $('#pointsContainer>span');
  //定义所需变量
  var imgWidth = $('#imglist>img').width();
  var totalTime = 400;
  var stepTime = 20;
  // 获取应有的图片数量
  var imgCount = $points.length;
  // console.log($('#imglist>img').width());
  //鼠标移入显示翻页标签 鼠标移出隐藏翻页标签
  $container.hover(function () {
    $arrowspan.css('display', 'block')
  }, function () {
    $arrowspan.css('display', '')
  })

  //点击翻页标签切换图片
  $('#left').click(function () {
    nextImg(true);
  });
  $('#right').click(function () {
    nextImg(false);
  });
  //平滑翻页函数
  function nextImg(next) {
    var nowLeft = $('#imglist').position().left;
    var offset = next ? imgWidth : -imgWidth;
    var target = nowLeft + offset;
    var stepLeft = offset / (totalTime / stepTime);
    var timeId = setInterval(function () {
      nowLeft += stepLeft;
      if (nowLeft === target) {
        clearInterval(timeId);
        if (nowLeft === -(imgCount + 1) * imgWidth) {
          nowLeft = -imgWidth;
        } else if (nowLeft === 0) {
          nowLeft = -imgCount * imgWidth;
        }
      }
      $('#imglist').css('left', nowLeft);
    }, stepTime)
  }
})