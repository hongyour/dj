define(["care_car","jquery","jquery-cookie"],function(care_car,$){
	function recommend(){
		$(function(){
			$.ajax({
				url:"data/recommend.json",
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						$(`<div class="aPro1">
							<a href="#">
							<div class="aPro-pic">
								<img src="${arr[i].src}" alt="">
							</div>
							<div class="aPro-txt">
								<p>${arr[i].title}</p>
								<p>
									<span>${arr[i].price}</span>
									<span>${arr[i].sale}</span>
								</p>
							</div>
							</a>
						<button class="buyIt" id="${arr[i].id}">加入购物车</button>
						</div>`).appendTo($(".aPro"));
					}
				},
				error:function(error){
					console.log(error);
				}
			})

			$(".aPro").on("click",".buyIt",function(){
				var ID = this.id;
				// alert()
				care_car.care_car(ID);
			})
		})
	}
	return{
		recommend:recommend
	}
})