<?php
  //在php中获取一个链接的数据
  //设置编码格式
  header("Content-type: text/plain; charset=utf-8");
  // 获取前端界面输入的city
  //将中文字符转换成url编码
  $cityName = urlencode($_GET["cityName"]);
  

  //使用curl进行网络数据访问
  $ch = curl_init();
  //网络访问的url地址
  $url = "http://apicloud.mob.com/v1/weather/query?key=2a8a5592b5d64&city=" . $cityName;
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  //执行HTTP请求
  curl_setopt($ch, CURLOPT_URL, $url);
  //得到数据
  $res = curl_exec($ch);
  echo $res;
?>