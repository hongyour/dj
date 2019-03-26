define(["jquery","jquery-cookie"],function($){
	function register(){
		$(function(){
			var str = `${$("#username").name}=${$("#username").value}&${$("#password").name}=${$("#password").value}`;
			$.ajax({
				type:"post",
				url:"php/register.php",
				data:str,
				success:function(data){
					console.log(data);
				},
				error:function(msg){
					alert(msg);
				}
			})
		})
	}
	return{
		register:register
	}
})