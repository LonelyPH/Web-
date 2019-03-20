<?php
  
  sleep(5);
  
  $uname = $_GET["username"];
  // $uname = $_POST["username"];

  //此处应查询数据库
  if ($uname == 'zhangsan') {
    echo "username exists!";
  }
  else {
    echo "username OK!";
  }
?>