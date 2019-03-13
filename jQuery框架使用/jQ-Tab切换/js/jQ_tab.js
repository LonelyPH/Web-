// jQuery js

var $tabbodylis = $('#tabbody>li');
$('#tabhead>li').click(function () {
  /* 获取当前点击的li的索引 */
  var index = $(this).index();
  /* 重置tabhead中li的背景色 */
  $('#tabhead>li').attr('class', 'gbcgreen');
  /* 设置当前点击的li的背景色 */
  $(this).attr('class', 'bgcclick');
  /* 点击先隐藏所有tabbodyli */
  $tabbodylis.css('display', 'none');
  /* 显示当前点击的li对应的tabbody中的li */
  $($tabbodylis[index]).css({
    'background': 'pink',
    'display': 'block'
  })
});