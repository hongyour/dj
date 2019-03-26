define(["jquery"],function($){
	function glass(){
		$(function(){
		$(".de-left-top").on("mouseenter","#detail-one",function(ev){
			// alert($(this).index());
			var mask = $(".de-left-top ul li").eq($(this).index()).find("#mask");
				$(".de-left-top ul li").eq($(this).index()).find("#mask").css("display","block");

				$("#glass").css("display","block");
				$("#glass li").css("display","none");
				var glassli = $("#glass li").eq($(this).index());
				$("#glass li").eq($(this).index()).css("display","block");

				var _this = this;

				$(document).mousemove(function(ev){
					var l = ev.pageX - $(_this).offset().left  -50 ;
					var t = ev.pageY - $(_this).offset().top -50;
					var width = $(_this).innerWidth();
					var height = $(_this).innerHeight();
					if(l <= 0 ){
						l = 0;
					}
					if(l >= width - mask.innerWidth()){
						l = width - mask.innerWidth();
					}
					if(t <= 0){
						t = 0;
					}
					if(t >= height - mask.innerHeight()){
						t = height - mask.innerHeight();
					}

					mask.css("left",`${l}px`);
					mask.css("top",`${t}px`);
					var mwidth = mask.offset().left;
					var mheight = mask.offset().top;

					$("#glass #ga").css("left",`-${mwidth}px`);
					$("#glass #ga").css("top",`-${mheight}px`);
				})
		})
			
			$(".de-left-top").mouseleave(function(){
				mask.css("display","none");
				$("#glass").css("display","none");
			})

		})
	}
	return{
		glass:glass
	}
})