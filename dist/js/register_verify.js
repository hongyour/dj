define(["submit","jquery","jquery-cookie"],function(submit,$){
	function verify(){
		$(function(){
			var oUsername = $("#username");
			var oPsd = $("#password");
			var oSpsd = $("#spsd");
			var oValue = $("#username").val();
			oValue = oValue.replace(/ /g,"");
			$("#username").val(oValue);
			var par = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
			if(!oUsername.val()){
				// alert();
				$("#email-span").html("请输入邮箱");
			}else{
				if(!(par.test(oValue))){
					$("#email-span").html("邮箱格式不正确");
					// alert("邮箱格式不正确");
				}else{
					var index = oValue.lastIndexOf(".");
					var sub = oValue.substring(index+1);
					// alert(sub);
					if(sub != "com"){
						$("#email-span").html("请输入正确的邮箱后缀");
					}else if(!oPsd.val()){
						$("#email-span").html("");
						$("#psd-span").html("请输入密码");
					}else if(!oSpsd.val()){
						$("#email-span").html("");
						$("#psd-span").html("");
						$("#spsd-span").html("请再次输入密码");
					}else if(oPsd.val() != oSpsd.val()){
						$("#spsd-span").html("两次输入密码不一致");
					}else{
						$("#email-span").html("");
						$("#psd-span").html("");
						$("#spsd-span").html("");
						submit.submit();
					}
				}
			}

		})
	}
	return{
		verify:verify
	}
})