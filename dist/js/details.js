define(["glass","sure","jquery","jquery-cookie"],function(glass,sure,$){
	function details(){
		$(function(){
			glass.glass();
			sure.sure($("#goods"));

			$("#goods").on("click",function(){
				var url = window.location.search;
				var arr = url.split("?");
				var ID = arr[1];
				if(ID){
					$(location).attr("href",`buy.html?${ID}`);
				}else{
					$(location).attr("href",`buy.html`);
				}
			});
			// 选项卡效果
			$.ajax({
				url:"data/tab_1.json",
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						$(`<li id="detail-one" >
								<div class="de-img">
									<img src="${arr[i].src}" alt="" id="${arr[i].id}">
								</div>
								<div id="mask"></div>
							</li>`).appendTo($(".de-left-top ul"));
						$(`<li><img src="${arr[i].src}"></li>`).appendTo($(".de-left-bottom ul"));
						$(`<li id="ga"><img src="${arr[i].src}" alt="" id="a1"></li>`).appendTo($("#glass ul"));
					}
				},
				error:function(error){
					console.log(error);
				}
			})


			$(".de-left-bottom").on("click","li",function(){
				// alert($(this).index());
				$(".de-left-bottom li").css("opacity",".5").eq($(this).index()).css("opacity","1");
				$(".de-left-top li").css("display","none").eq($(this).index()).css("display","block");
				$("#glass li").css("display","none").eq($(this).index()).css("display","block");
			})
		})
	}
	return{
		details:details
	}
})