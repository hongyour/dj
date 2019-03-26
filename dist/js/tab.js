define(["jquery"],function($){
	function tab(){
		$(function(){
			// alert(1);
			$.ajax({
				type:"GET",
				url:"data/select.json",
				success:function(arr){
					// alert(arr);
					for(var i = 0; i < arr.length; i++){
						var node = $(`<div id="sele-one-r" style="display:block;">
							<div class="div1"></div></div>`).appendTo($(".se-right"));
						for(var j = 0; j < arr[i].pro.length; j++){
							$(`	
								<dl>
								<dt><img src="${arr[i].pro[j].src}" alt="" style="height:70px;width:100px"></dt>
								<dd>${arr[i].pro[j].decs}</dd>
							</dl>`).appendTo(node.find($("#sele-one-r .div1")));
						}
					}
				},
				error:function(msg){
					console.log(msg);
				}
			})


			$("#se-one").hover(function(){
				$(".blind").stop().fadeIn(300,function(){
					$("#sele-one").css("opacity","1");
					$(".se-one").css("border-bottom","1px solid #333");
				});
			},function(){
				$(".blind").stop().fadeOut(300);
				$(".se-one").css("border-bottom","0");
				
			})


			$(".blind").on("mouseover","#tab li",function(){
				$(".blind").find("#tab li a").css("color","#6c7073")
				.eq($(this).index()).css("color","#1897f2");
				$(".blind").find(".se-right #sele-one-r").css("display","none")
				.eq($(this).index()).css("display","block");
			})


		})
	}
	return {
		tab:tab
	}
})