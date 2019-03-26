define(["jquery"],function($){
	function select_pre(){
		$(function(){
			$.ajax({
				type:"GET",
				url:"data/1.json",
				success:function(arr){
					// alert(arr);
					for(var i = 0; i < arr.length; i++){
						$(`<li><a href="#">${arr[i]}</a></li>`).appendTo($("#sele-last .add"));
					}
				},
				error:function(msg){
					console.log(msg);
				}
			})

			//移入移出

			$("#se-last").hover(function(){
				$("#sele-last").stop().fadeIn(300,function(){
					$("#sele-last").css("opacity","1");
				});
				// $("#sele-last").css("display","block");
			},function(){
				$("#sele-last").stop().fadeOut(300);
				// $("#sele-last").css("display","none");
			})
		})
	}
	return {
		select1:select_pre
	}
})