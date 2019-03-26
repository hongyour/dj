define(["jquery"],function($){
	function select3(){
		$(function(){
			$.ajax({
				type:"GET",
				url:"data/4.json",
				success:function(arr){
					// alert(arr);
					for(var i = 1; i < arr.length; i++){
						$(`	<dl>
								<dt><img src="${arr[i].img}" alt="" style="height:70px;width:100px"></dt>
								<dd>${arr[i].title}</dd>
							</dl>`).appendTo($("#sele-one-r1 .div1"));
					}
				},
				error:function(msg){
					console.log(msg);
				}
			})

			// $("#se-one").hover(function(){
			// 	$(".blind").stop().fadeIn(300,function(){
			// 		$("#sele-one").css("opacity","1");
			// 		$(".se-one").css("border-bottom","1px solid #333");
			// 	});
			// },function(){
			// 	// $(".blind").stop().fadeOut(300);
			// 	$(".se-one").css("border-bottom","0");
				
			// })
		})
	}
	return {
		select3:select3
	}
})

