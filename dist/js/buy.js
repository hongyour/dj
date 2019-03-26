define(["jquery","jquery-cookie"],function($){
	function buy(){
		$(function(){
			$("#goone").click(function(){
				var url = window.location.search;
				var arr = url.split("?");
				// alert(arr);
				var ID = arr[1];
				
				if(ID){
					$(location).attr("href",`care.html?${ID}`);
				}else{
					$(location).attr("href",`care.html`);
				}

			})
		})
	}
	return{
		buy:buy
	}
})