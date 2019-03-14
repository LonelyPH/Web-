;(function (window, undefined) {
  // 工具对象
  // 生成随机数
  var Tool = {
    // 随机数
    getRandom: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    // 对象拷贝
    extend: function (parent, child) {
      for (var key in parent) {
        if (child[key]) continue;
        child[key] = parent[key];
      }
    }
  }
  window.Tool = Tool;
}) (window, undefined)