define(["login_submit","jquery"],function(login_submit,$){
	function login_verify(){
		$(function(){
			var oUsername = $("#username");
			var oPsd = $("#password");
			var oValue = $("#username").val();
			oValue = oValue.replace(/ /g,"");
			$("#username").val(oValue);
			var par = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
			if(!oUsername){
				alert("请输入邮箱账号");
			}else{
				if(!(par.test(oValue))){
					$("#email-span").html("邮箱格式不正确");
				}else{
					var index = oValue.lastIndexOf(".");
					var sub = oValue.substring(index+1);
					// alert(sub);
					if(sub != "com"){
						$("#email-span").html("请输入正确的邮箱后缀");
					}else if(!oPsd.val()){
						$("#email-span").html("");
						$("#psd-span").html("请输入密码");
					}else{
						$("#email-span").html("");
						$("#psd-span").html("");
						login_submit.login_submit();
						/*$(document).ready(function(){
							setTimeout(url(), 3000);
						})*/
					}

				}

			}
			/*function url(){
				$(location).attr("href","../dist/index.html");
			}
*/
		})
	}
	return{
		login_verify:login_verify
	}
})