define(["login_verify","jquery"],function(login_verify,$){
	function login(){
		$(function(){
			$("#sub").click(function(){
				login_verify.login_verify();
				// $(location).attr("href","../dist/index.html");
			})
			
		})
	}
	return {
		login:login
	}
})