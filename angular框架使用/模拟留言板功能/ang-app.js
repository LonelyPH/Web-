//模拟留言板JS脚本  angular

angular.module ('myApp', [])
  .controller ('MyCtrl', ['$scope', function ($scope) {
    // 初始化数据
    $scope.massage = '';
    // 获取输入的字数
    $scope.getWordNum = function () {
      // 如果超过最大字数，不再记录超出的文字
      if (this.massage.length > 100) {
        this.massage = this.massage.slice(0, 100);
      }
      // 计算剩余字数
      return 100 - this.massage.length;
    }
    // 保存输入的文本
    $scope.save = function () {
      if (this.massage == '') {
        alert('没有可保存的文本！');
      }
      else {
        sessionStorage.setItem ('node_key', JSON.stringify(this.massage));/* 将JS转换为JSON，提高安全性 */
        alert('文本已保存');
      }
    }
    // 读取保存的文本
    $scope.read = function () {
      if (this.massage == '') {
        alert('没有保存的文本！');
      }
      else {
        this.massage = JSON.parse (sessionStorage.getItem ('node_key'));/* 获取JSON数据时将JSON转换为JS */
      }
    }
    // 删除文本框中的文本
    $scope.removed = function () {
      if (this.massage == '') {
        alert('没有文本可删除！');
      }
      else if (confirm('真的删除吗？')) {
        this.massage = '';
      }
    }
  }])