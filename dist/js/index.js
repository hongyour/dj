define(["show_car","nav","total","jquery","select1","tab","banner","mavic"],function(show_car,nav,total,$,select1,tab,banner,mavic){
	function index(){
		$(function(){
			
			select1.select1();

			//第一个li左边获取
			$.ajax({
				type:"GET",
				url:"data/select_pre.json",
				success:function(arr){
					// alert(arr);
					for(var i = 0; i < arr.length; i++){
						$(`<li id="${arr[i].id}"><a href="#">${arr[i].title}<span>></span></a></li>`).appendTo($(".blind ul"));
					}
				},
				error:function(msg){
					console.log(msg);
				}
			})

			//第一个li右边获取
			
			

			//第一个li下面获取

			//选项卡效果
			tab.tab();

			//banner滚动
			banner.banner();

			//首页循环添加数据
			mavic.mavic();

			//获取cookie的数量
			total.total("#car");

			//nav获取数据
			nav.nav();

			//购物车加载数据
			show_car.show_car();


			

				/*$("right_move").css({
					display: "block",
					left: ($(window).width() - $("right_move").outerWidth()) / 2,
					top: ($(window).height() - $("right_move").outerHeight()) / 2
				});*/

			$(window).on("scroll", function(){
				// alert($(window).scrollTop());
				$(window).scroll(function(){
					var s=$(window).scrollTop();
					if(s>650){
						$(".right_move").css({
							display:"block",
							right: 0,
							top: ($(window).height() - $(".right_move").outerHeight()) / 2 
						});
					}

					if(s < 663){
						$(".right_move").css({
							display:"none",
						});
					}
				}); 
			})

		})

		
	}
	return {
		index:index
	}
})