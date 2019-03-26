define(["jquery","slide"],function($,slide){
	function banner(){
		$(function(){
			$.ajax({
				url:"data/banner.json",
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						$(`
							<li id="${arr[i].id}">
							<img src="${arr[i].img}">
							<div class="bShow" id="aaa">
								<h2>灵眸<span>OSMO</span>  <span>口袋云台相机</span></h2>
								<div id="qu">
									<h3>转动随心，灵感不停</h3>
									<section>轻小便携 | 超清画质 | 稳定拍摄 | 智能跟随</section>
								</div>
							</div>
							</li>
							
							`)
						.appendTo("#banner1 ul");
					}
				},
				error:function(error){
					console.log(error);
				}
			})

			slide.slide();

		})
	}
	return{
		banner:banner
	}
})

// style="background:url(${arr[i].img}) 60% 60%"