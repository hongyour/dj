define(["recommend","jquery","jquery-cookie"],function(recommend,$){
	function cart(){
		$(function(){
			recommend.recommend();

			trolley();
			all();
			function trolley(){
				$.ajax({
					url:"data/shop.json",
					success:function(arr){
						if($.cookie("goods")){
							var cookieStr = $.cookie("goods");
							var cookieArr = eval(cookieStr);
							var goodsArr = [];
							for(var k = 0; k < arr.length; k++){
								for(var i = 0; i < arr[k].pro.length; i++){
									for(var j = 0; j < cookieArr.length; j ++){
										if(cookieArr[j].id == arr[k].pro[i].id){
											arr[k].pro[i].num = cookieArr[j].num;
											cookieArr[j].price = arr[k].pro[i].price;
											goodsArr.push(arr[k].pro[i]);
										}
									}
								}
							}
							
							//循环加载数据
							for(var i = 0; i < goodsArr.length; i++){
								$(`<label for="s${goodsArr[i].id}" class="la-bel">
									<div class="la-div">
										<input type="checkbox" id="s${goodsArr[i].id}" class="la-in" name="checkbox">
									
										<div class="trolley">
										<div class="product">
										<div class="shop-b2">
											<a href="#"><img src="${goodsArr[i].src}" alt=""></a>
										</div>
										<div class="shop-b3">

											<section>
												<a href="#">${goodsArr[i].title}</a>
												<div>发货时间：订单付款后1个工作日。</div>
											</section>
											<div class="price">${goodsArr[i].price}</div>
											<div class="num">
												<button id="${goodsArr[i].id}">-</button>
												<input type="text" readonly value="${goodsArr[i].num}">
												<button id="${goodsArr[i].id}">+</button>
										</div>
										<div class="total">0</div>
										<div class="delete" id="${goodsArr[i].id}"><i class="iconfont">&#xe621;</i></div>
									</div>
								</div>
								<div class="shop-b1"></div></div></div></label>`).appendTo($(".shop-buy1"));
							}
							
						}

						sc_total();
						// allTotal();
						all();


					},
					error:function(error){
						console.log(error)
					}
				});

			}


			//购物车num的加减
			
			$(".shop-buy1").on("click","button",function(){
				all();
				// sc_sum();
				// alert(typeof(this.innerHTML));string
				var ID = this.id;
				var cookieStr = $.cookie("goods");
				var cookieArr = eval(cookieStr);
				for(var i = 0; i < cookieArr.length; i++){
					if(ID == cookieArr[i].id){
						//判断加减
						if(this.innerHTML == "+"){
							cookieArr[i].num ++;
							//寻找这个节点下的子节点为input的
							$(this).siblings("input").val(cookieArr[i].num);
							$.cookie("goods",JSON.stringify(cookieArr),{
								expires:7,
								raw:true
							})
							break;
						}else{
							//判断num是否为1
							if(cookieArr[i].num == 1){
								$(this).closest(".trolley").remove();
								//从cookie删除这个数据，splice修改元数据(数组方法)
								cookieArr.splice(i,1);
								if(cookieArr.length == 0){
									$.cookie("goods",null);
								}else{
									$.cookie("goods",JSON.stringify(cookieArr),{
										expires:7
									})
								}
							}else{
								cookieArr[i].num --;
								$(this).siblings("input").val(cookieArr[i].num);
								$.cookie("goods",JSON.stringify(cookieArr),{
									expires:7,
									raw:true
								})
							}
						}
					}
				}
				sc_total();
				all();
				
			})

			function sc_total(){
				$(".shop-buy1").find(".trolley").each(function(){
					price_str = $(this).find(".price").html();
					var price = parseInt(price_str.substring(1));
					// alert(price);
					num = parseInt($(this).find("input").val());
					// alert(num);
					var total = price * num;
					$(this).find(".total").html(`￥${total}`);
				})
			}

			function allTotal(){
				$(".shop-b1").on("change",'input[type="checkbox"]',function(){
					alert(1);
					var all = 0;
					// $(".shop-buy1").find(".shop-b3 .num").each(function(){
						// alert($(".shop-buy1").find(".shop-b3 .num").length);
						if($(".shop-b1").find("input[type='checkbox']").is(':checked')){
							var allTotal = $(this).closest(".la-div").find(".shop-b3").find(".total").html();
							allTotal = allTotal.split("￥");
							var price = parseInt(allTotal[1]);
							$(".allTotal").html(`￥${price}`);
							all += price;	
						}
					// })
					// return all;
				})

				all();

			}


			$('input[id="wholeSelect"]').on("click",function(){
				var _this = this;
				if($(this).is(':checked')){
					$('input[name="checkbox"]').each(function(){
						$(this).prop("checked",true);
						all();
					});

				}else{
					$('input[name="checkbox"]').each(function(){
						$(this).prop("checked",false);
						all();
					});
				}
			});
			
			function all(){
				var all = 0;
					$(".shop-buy1").find(".shop-b3 .num").each(function(){
					// alert($(".shop-buy1").find(".shop-b3 .num").length);
					if($(".shop-buy1").find("input[type='checkbox']").is(':checked')){
						var allTotal = $(this).closest(".la-div").find(".shop-b3").find(".total").html();
						allTotal = allTotal.split("￥");
						var price = parseInt(allTotal[1]);
						
						all += price;	
					}
				})
				$(".allTotal").html(`￥${all}`);
			}

			//删除某个商品
				$(".shop-buy1").on("click",".delete",function(){
					if($.cookie("goods")){
						var ID = this.id;
						var cookieStr = $.cookie("goods");
						var cookieArr = eval(cookieStr);
						for(var i = 0; i < cookieArr.length; i++){
							if(ID == cookieArr[i].id){
								$(this).closest(".trolley").remove();
								cookieArr.splice(i,1);
								// $.cookie("goods",null);
							}
						}
						
						if(cookieArr.length == 0){
							$.cookie("goods", null)
						}else{
							$.cookie("goods",JSON.stringify(cookieArr),{
										expires:7
							})
						}
					}

				})
			
		})
	}
	return{
		cart:cart
	}
})