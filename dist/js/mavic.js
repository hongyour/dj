define(["jquery"],function($){
	function mavic(){
		$(function(){
			/*$.ajax({
				url:"../data/shop-top.json",
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						$(`<div class="art3-pro" id="${arr[i].id}">
								<div id="art3-pro-pic">
								<div class="art-img"><img src="${arr[i].src}"></div>
								<div class="art3-pic"><img src="${arr[i].img}">
									<p class="yin">${arr[i].desc}</p>
								</div>
									
								</div>
								<h4>${arr[i].title}</h4>
								<div class="art-span">
									<span>${arr[i].price}</span>
									<span>${arr[i].sale}</span>
								</div>
							</div>`).appendTo($("#art3"));
					}
				},
				error:function(error){
					console.log(error);
				}
			});*/

			$.ajax({
				url:"data/shop.json",
				success:function(arr){
					for(var i = 0; i < arr.length -1; i++){
						var node = $(`<div id="article-Box" class="clear">
							<div id="art1" class="clear">
								<h2>${arr[i].theme}</h2>
								<span class="more"><a href="#">更多></a></span>
							</div>
							<div id="art2" class="clear">
							<a href="details.html" class="clear">
								<div id="yu-pic">
									<img src="${arr[i].img}" alt="">
								</div>
								<div id="yu-text">
									<h2>${arr[i].title}</h2>
									<p>${arr[i].desc}</p>
									<span>${arr[i].price}</span>
								</div>
							</a>
								<div id="yu-video">
									<video src="images/yu.mp4" autoplay loop muted></video>
								</div>
							</div>
							<div class="art3">
							</div>
							</div>`);
						node.appendTo($("#goods"));
						for(var j = 0; j < arr[i].pro.length; j++){
							// alert(arr[i].pro.length);
							$(`<div class="art3-pro" id="${arr[i].pro[j].id}">
								<div id="art3-pro-pic">
								<div class="art-img"><img src="${arr[i].pro[j].src}"></div>
								<div class="art3-pic"><img src="${arr[i].pro[j].img}">
									<p class="yin">${arr[i].pro[j].desc}</p>
								</div>
									
								</div>
								<h4>${arr[i].pro[j].title}</h4>
								<div class="art-span">
									<span>${arr[i].pro[j].price}</span>
									<span>${arr[i].pro[j].sale}</span>
								</div>
							</div>`).appendTo(node.find($(".art3")));

						}
						// node.appendTo($("#goods"));
					}
					



				},
				error:function(error){
					alert(error);
				}
			});

			$.ajax({
				url:"data/shop.json",
				success:function(arr){
					for(var i = 0; i < arr[6].pro.length; i++){
						$(`<div class="ser-e" id="${arr[6].pro[i].id}">
							<img src="${arr[6].pro[i].src}" alt="">
							<h4>${arr[6].pro[i].title}</h4>
							<span>${arr[6].pro[i].price}</span>
							</div>`).appendTo($("#serve-con"));
					}
				},
				error:function(error){
					alert(error);
				}
			});

			//事件委托${arr[i].img}
			$("#art3").on("mouseenter",".art3-pro",function(){
				$(".art3-pic").css("display","none")
				.eq($(this).index()).css("display","block");
				$(".yin").css("display","none")
				.eq($(this).index()).css("display","block");
			})

			$("#art3").on("mouseleave",".art3-pro",function(){
				$(".art3-pic").css("display","none");
				$(".yin").css("display","none");
			})


			//事件委托2
			
			$("#goods").on("click",".art3-pro",function(){
				var ID = this.id;

				$(location).attr("href",`details.html?${ID}`)

			})

			/*$("#art3").on("mouseleave",".art3-pro",function(){
				$(".art3-pic").css("background-image",``);
			})*/
		})
	}
	return{
		mavic:mavic

	}
})