define(["care_car","jquery","jquery-cookie"],function(care_car,$){
	function care(){
		$(function(){

			$("#go-shop").click(function(){
				var url = window.location.search;
				var arr = url.split("?");
				var ID = arr[1];
				//判断是否是以第一创建cookie'
				//var ID = this.id;
				if(ID){
					care_car.care_car(ID);
				}else{
					location.href = "cart.html";
				}
				
				//location.assign("index.html");
				
			})

		})
	}
	return{
		care:care
	}
})