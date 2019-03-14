// 写一个函数，处理innerText和textContent的兼容性问题

// 获取元素之间的内容
function getInnerText(element) {
  // 判断element是否支持innerText
  if (typeof element.innerText === 'string') {
    return element.innerText;
  } else {
    return element.textContent;
  }
}
// 设置元素之间的内容
function setInnerText(element, content) {
  // 判断element是否支持innerText
  if (typeof element.innerText === 'string') {
    element.innerText = content;
  } else {
    element.textContent = content;
  }
}

// 获取min-max之间的随机整数
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

// 根据id获取元素
function my$(id) {
  return document.getElementById(id);
} 


// 处理firstElementChild的兼容性问题
function getFirstElementChild(parent) {
  // 如果当前浏览器 支持firstElementChild
  if (parent.firstElementChild) {
    return parent.firstElementChild;
  }

  var node, nodes = parent.childNodes, i = 0;
  while (node = nodes[i++]) {
      if (node.nodeType === 1) {
          return node;
      }
  }
  return null;
}


// 注册事件 ，处理兼容性问题
function addEventListener(element, eventName, callback) {
  if (element.addEventListener) {
    element.addEventListener(eventName, callback, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + eventName, callback);
  } else {
    element['on' + eventName] = callback;
  }
}

// 移除事件， 处理兼容性问题
function removeEventListener(element, eventName, callback) {
  if (element.removeEventListener) {
    element.removeEventListener(eventName, callback, false);
  } else if (element.detachEvent) {
    element.detachEvent('on' + eventName, callback);
  } else {
    element['on' + eventName] = null;
  }
}

// 获取页面滚动出去的距离。处理兼容性
function getScroll() {
  return {
    scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
    scrollLeft: document.documentElement.scrollLeft || document.body.scrollLeft
  }
}

 // 获取鼠标在页面上的坐标  解决ie8的问题
 function getPage(e) {
  return {
    pageX: e.clientX + getScroll().scrollLeft,
    pageY: e.clientY + getScroll().scrollTop
  }
}