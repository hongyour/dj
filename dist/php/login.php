<?php
/*
	登录页面
 */
	header("content-type:text/html;charset=utf-8");
	// $id = $_POST["id"];
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
	$sql = "SELECT * FROM user WHERE email='{$email}' AND password='{$password}'";
	// echo $sql;
	//传输sql
	$res = mysql_query($sql);
	$row = mysql_fetch_assoc($res);
	if($row){
		echo "登录成功";
		
	}else{
		echo "用户名或密码错误";
	}

	//关闭数据库
	mysql_close($link);
	// header('Location:../dist/index.html');
?>