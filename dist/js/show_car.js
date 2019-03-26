define(["jquery","jquery-cookie"],function($){
	function show_car(){
		$(function(){
			$.ajax({
				url:"data/shop.json",
				success:function(arr){
					var sum = 0;
					var total = 0;
					for(var i = 0; i < arr.length; i++){
						for(var j = 0; j < arr[i].pro.length; j++){
							if($.cookie("goods")){
								var cookieStr = $.cookie("goods");
								var cookieArr = eval(cookieStr);
								for(var k = 0; k < cookieArr.length; k++){
									if(cookieArr[k].id == arr[i].pro[j].id){
										$(`<dl>
											<dt><img src="${arr[i].pro[j].src}" alt=""></dt>
											<dd><p>${arr[i].pro[j].title}</p>
											<p class="add">${cookieArr[k].num} * ${arr[i].pro[j].price}</p></dd>
										</dl>`).prependTo($(".show-car .show-c-p"));

										sum += cookieArr[k].num;
										// alert(sum);
										// alert(cookieArr[k].num);
										// add = 
										// total += 
										
									}
									
								}
								
							}
						}


					}
					$(".show-c-p").find("dl .add").each(function(){
						// alert($(".show-c-p").find("dl .add").length);
						var str = $(this).html();
						// alert(str);
						var arr = str.split("*");
						var show_num = parseInt(arr[0]);
						var show_price_str = arr[1];
						show_price_str = show_price_str.substring(2);
						var show_price = parseInt(show_price_str);
						add = show_num * show_price;
						total += add;
					})
					$(`<div class="show-num">
						<b>${sum}件商品</b>
						<b>￥${total}</b>
					</div>`).prependTo(".show-car .show-c-t");
				},
				error:function(error){
					console.log(error);
				}
			})

			$("#shop_car").hover(function(){
				$(".show-car").stop().fadeIn(200);
			},function(){
				$(".show-car").stop().fadeOut(200);
			})

			
		})
	}
	return{
		show_car:show_car
	}
})