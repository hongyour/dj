define(["jquery","jquery-cookie"],function($){
	function submit(){
		$(function(){
			var oUsername = $("#username");
			// alert(oUsername.val());
			// alert(oUsername.attr("name"));
			var oPsd = $("#password");
			var str = `${oUsername.attr("name")}=${oUsername.val()}&${oPsd.attr("name")}=${oPsd.val()}`;
			$.ajax({
				type:"post",
				url:"php/register.php",
				data:str,
				success:function(data){
					alert(data);
					if(data == "注册成功"){
						$(location).attr("href","登录.html");
					}
				},
				error:function(msg){
					console.log(msg);
				}
			})
		})
	}
	return{
		submit:submit
	}
})