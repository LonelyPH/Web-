// 主JS代码
// 获取所有需要操作的标签区域
var mainBox = document.getElementById('box');/* 获取整个操作区域 */
// 获取小盒子
var smallBox = mainBox.children[0];/* 获取small标签区域 */
var smallImg = smallBox.children[0];/* 获取小图片 */
var maskBox = smallBox.children[1];/* 获取遮盖层标签区域 */
// 获取大盒子
var bigBox = mainBox.children[1];/* 获取big标签区域 */
var bigImg = bigBox.children[0];/* 获取大图片 */


//一、 鼠标经过smallBox，显示遮盖层和大盒子 onmouseenter 不会产生事件冒泡 防止ie10的不稳定
smallBox.onmouseenter = function () {
  //1.1 显示遮盖层
  maskBox.style.display = 'block';
  //1.2 显示大盒子
  bigBox.style.display = 'block';

}
 //1.3 鼠标在smallBox中移动时，遮盖层跟随鼠标移动
smallBox.onmousemove = function (e) {
  e = e || event;/* 处理兼容性 */
  // 1.3.1 遮盖层的显示位置设置为鼠标位置
  // 1.3.2 获取鼠标在smallBox中的坐标位置
  var mouseX = getPage(e).pageX - box.offsetLeft;
  var mouseY = getPage(e).pageY - box.offsetTop;

  // 计算maskBox在smallBox中的位置
  var maskX = mouseX - maskBox.offsetWidth / 2;
  var maskY = mouseY - maskBox.offsetHeight / 2;

  // 遮盖层可移动的最大距离
  var maxMaskX = smallBox.offsetWidth - maskBox.offsetWidth;
  var maxMaskY = smallBox.offsetHeight - maskBox.offsetHeight;
  // console.log(maxMaskY);
  // 判断遮盖层位置是否超出smallBox
  if (maskX <= 0) {
    maskX = 0;
  }
  if (maskY <= 0) {
    maskY = 0;
  }
  if (maskX >= maxMaskX) {
    maskX = maxMaskX;
  }
  if (maskY >= maxMaskY) {
    maskY = maxMaskY;
  }
  // 1.3.3 设置maskBox的显示位置
  maskBox.style.left = maskX +'px';
  maskBox.style.top = maskY +'px';

  // 计算大图片移动距离与遮盖层移动距离的关系值
  // mask移动距离/大图片移动距离 = mask最大移动距离/大图片最大移动距离
  // 大图片可移动的最大距离
  var bimgX = bigImg.offsetWidth - bigBox.offsetWidth;
  var bimgY = bigImg.offsetHeight - bigBox.offsetHeight;
  // console.log(bimgX);

  // 设置bigBox中图片显示的位置
  var imgX = maskX * bimgX / maxMaskX;
  var imgY = maskY * bimgX / maxMaskX;
  bigImg.style.left = -imgX +'px';
  bigImg.style.top = -imgY +'px';
}


//二、 鼠标离开smallBox隐藏遮盖层和大盒子 onmouseleave 不会产生事件冒泡，防止ie10的不稳定
smallBox.onmouseleave = function () {
  //2.1 隐藏遮盖层
  maskBox.style.display = 'none';
  //2.2 隐藏大盒子
  bigBox.style.display = 'none';
}