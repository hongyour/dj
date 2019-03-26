define(["jquery"],function($){
	function slide(){
		$(function(){
			var timer = null;
			var oUl = document.getElementById('banner1');
			var aLis = oUl.getElementsByTagName('li');

			var iNow = 0;

			timer =setInterval(function(){
				var outOrd = iNow;
				iNow++;
				if(iNow > aLis.length - 1){
					iNow = 0;
				}
				
				var num = $("#banner1 ul li");
				/*num.eq(iNow).animate({
					opacity:0
				},1500,function(){
					$("#banner1 ul li .bShow").attr("id","aaa");
				});
				// $("#banner1 #show").animate({
				// 	top:300
				// })

				num.eq(outOrd).animate({
					opacity:1
				},1500);*/
				$("#banner1 ul li .bShow").attr("id","aaa");
				//消失
				num.eq(iNow).animate({
					opacity:0
				},1500,function(){
					$("#banner1 ul li .bShow").attr("id","");
				}).siblings().animate({
					opacity:1
				},1500);
				
				// num.eq(iNow).attr("class","aMove");
				// num.eq(outOrd).attr("class","dMove");	

			},4500)
		})
	}
	return {
		slide:slide
	}
})
