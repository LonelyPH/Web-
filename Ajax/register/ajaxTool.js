/* 
 *函数名：MyAjaxWithValue
 *Ajax数据请求函数
 *功能：向服务器发送get或post请求
 *参数为单个值：
 *    type:请求类型 值为 "post" 或者 "get"
 *    url: 请求地址 字符串格式
 *    params: 请求数据  字符串格式
 *    dataType: 数据的格式 值 "json" 或者 "xml" 或者其他字符串
 *    async: 异步/同步  异步值为 true 同步值为 false
 *    CallBack: 回调函数
 * */
function MyAjaxWithValue(type, url, params, dataType, async, CallBack) {
  // 1、创建XMLHttpRequest对象
  var xhr = null;
  xhr = new XMLHttpRequest();
  if (type == 'get') {
    if (params && params != '') {
      url += '?' + params;
    }
  }
  xhr.open(type, url, async);
  if (type == 'get') {
    xhr.send(null);
  } else if (type == 'post') {
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params);
  }
  if (async) {
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var result = null;
          if (dataType == 'json') {
            result = JSON.parse(xhr.responseText);
          } else if (dataType == 'xml') {
            result = xhr.responseXML;
          } else {
            result = xhr.responseText;
          }
          CallBack(result);
        }
      }
    }
  } else {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var result = null;
        if (dataType == 'json') {
          result = JSON.parse(xhr.responseText);
        } else if (dataType == 'xml') {
          result = xhr.responseXML;
        } else {
          result = xhr.responseText;
        }
        CallBack(result);
      }
    }
  }
}

/* 
*MyAjaxWithObj函数
*参数为对象如下：
* var obj = {
*   type: 'get',
*   url: '#',
*   params: {},
*   dataType: 'json',
*   async: true,
*   CallBack: function (result) {
*     consloe.log(result);
*   }
* }
**/
function MyAjaxWithObj(obj) {
  //*创建接受参数的对象
  var defaults = {
    type: 'get',
    url: '#',
    data: {},
    dataType: 'json',
    async: true,
    CallBack: function (result) {
      console.log(result);
    }
  }
  for (var obj_key in obj) {
    defaults[obj_key] = obj[obj_key];
  }
  //* 1、创建XMLHttpRequest对象
  var xhr = null;
  xhr = new XMLHttpRequest();
  //*获取params
  var params = '';
  for (var data_key in defaults.data) {
    params += data_key + '=' + defaults.data[data_key] + '&';
  }
  //*params拼接完毕后去除末尾的&
  if (params) {
    params = params.substring(0, params.length - 1);
  }
  //*判断是否是get请求
  if (defaults.type == 'get') {
    if (params && params != '') {
      //*是get请求则将params拼接到url后面
      defaults.url += '?' + params;
    }
  }
  //*准备发送请求
  xhr.open(defaults.type, defaults.url, defaults.async);
  //*如果是get请求
  if (defaults.type == 'get') {
    //*发送null
    xhr.send(null);
  } else if (defaults.type == 'post') {
    //*如果是post请求 设置请求头 发送params
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params);
  }
  //*判断是否异步
  if (defaults.async) {
    //*是异步则执行onreadystatechange
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var result = null;
          //*判断数据格式
          if (defaults.dataType == 'json') {
            //*是json格式则将其转换成js对象或数组
            result = JSON.parse(xhr.responseText);
          } else if (defaults.dataType == 'xml') {
            //*是XML格式则使用responseXML接受数据
            result = xhr.responseXML;
          } else {
            //*其他格式则直接获取responseText
            result = xhr.responseText;
          }
          //*将得到的result结果作为参数调用回调函数
          defaults.CallBack(result);
        }
      }
    }
  } else {
    //*是同步则直接执行
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var result = null;
        if (defaults.dataType == 'json') {
          result = JSON.parse(xhr.responseText);
        } else if (defaults.dataType == 'xml') {
          result = xhr.responseXML;
        } else {
          result = xhr.responseText;
        }
        defaults.CallBack(result);
      }
    }
  }

}