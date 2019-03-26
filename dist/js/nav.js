define(["jquery","jquery-cookie"],function($){
	function nav(){
		$(function(){
			$.ajax({
				url:"data/nav.json",
				success:function(arr){
					for(var i = 0; i <arr.length; i++){
						$(`<dl id="${arr[i].id}" class="nav-dl">
							<dt><img src="${arr[i].src}"></dt>
							<dd>${arr[i].decs}</dd>
						</dl>`).appendTo($("#nav1"));
					}
				},
				error:function(error){
					console.log(error);
				}
			})

			/*$("#nav1").on("click",".nav-dl",function(){
				var ID = this.id;
				$(location).attr("href",`../details.html?${ID}`);
			})*/

		})

	}
	return{
		nav:nav
	}
})