define(["jquery"]function($){
	function move(node1,node2,node3,node4){
		$(function(){
			$(node1).hover(function(){
				$(node2).stop().fadeIn(300,function(){
					$(node3).css("opacity","1");
					$(node4).css("border-bottom","1px solid #333");
				});
			},function(){
				$(node2).stop().fadeOut(300);
				$(node4).css("border-bottom","0");
				
			})
		})
	}
	return {
		move:move
	}
})

/*
			$("#se-one").hover(function(){
				$(".blind").stop().fadeIn(300,function(){
					$("#sele-one").css("opacity","1");
					$(".se-one").css("border-bottom","1px solid #333");
				});
			},function(){
				// $(".blind").stop().fadeOut(300);
				$(".se-one").css("border-bottom","0");
				
			})
 */