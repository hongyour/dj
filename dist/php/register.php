<?php
	header("content-type:text/html;charset=utf-8");
	$email = $_POST["email"];
	$password = $_POST["password"];
	//密码加密
	// $password = md5(md5($password)."qianfeng");
	$link = mysql_connect("localhost","root","");
	if(!$link){
		echo "数据库连接失败";
		exit;
	}
	mysql_set_charset("utf8");
	mysql_select_db("project");
	//首先判断用户名是否重名
	$sql = "SELECT * FROM user WHERE email='{$email}'";
	$res = mysql_query($sql);
	//mysql_fetch_assoc输出的是布尔值
	$row = mysql_fetch_assoc($res);
	if($row){
		echo "用户名已存在";
		exit;
	}

	//插入数据
	$sql = "INSERT INTO user(email,password) VALUES('{$email}',$password)";
	$res = mysql_query($sql);
	if($res){
		echo "注册成功";
	}else{
		echo "注册失败";
	}
	mysql_close($link);
?>