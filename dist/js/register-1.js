define(["register","jquery","jquery-cookie"],function(register,$){
	function submit(){
		$(function(){
			$("#sub").click(function(){
				register.register();
			})
		})
	}
	return{
		submit:submit
	}
})