define(["jquery","jquery-cookie"],function($){
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
									goodsArr.push(arr[k].pro[i]);
								}
							}
						}
					}
					
					// alert(goodsArr[0].num);
					//循环加载数据
					for(var i = 0; i < goodsArr.length; i++){
						$(`<div class="product">
							<div class="shop-b2">
								<a href="#"><img src="${goodsArr[i].src}" alt=""></a>
							</div>
							<label for="">
							<input type="checkbox">
							<div class="shop-b3">
								<section>
									<a href="#">${goodsArr[i].title}</a>
									<div>发货时间：订单付款后1个工作日。</div>
								</section>
								<div class="price">${goodsArr[i].price}</div>
								<div class="num">
									<button><i>-</i></button>
									<input type="text" readonly value="${goodsArr[i].num}">
									<button><i>+</i></button>
								</div>
								<div class="total">${goodsArr[i].price}</div>
							</div>
						</div>
						</label>
						<div class="shop-b1"></div>`).appendTo($(".shop-buy1"));
					}
				}
			},
			error:function(error){
				console.log(error)
			}
		});
	}
	return{
		trolley:trolley
	}
})