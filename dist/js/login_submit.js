define(["jquery"],function($){
	function login_submit(){
		$(function(){
			var oUsername = $("#username");
			var oPsd = $("#password");
			var str = `${oUsername.attr("name")}=${oUsername.val()}&${oPsd.attr("name")}=${oPsd.val()}`;
			$.ajax({
				type:"post",
				url:"php/login.php",
				data:str,
				success:function(data){
					alert(data);
					if(data == "登录成功"){
						$(location).attr("href","index.html");
					}
				},
				error:function(msg){
					console.log(msg);
				}
			})
		})
	}
	return{
		login_submit:login_submit
	}
})