define(["jquery"],function($){
	function select2(){
		$(function(){
			$.ajax({
				type:"GET",
				url:"data/select.json",
				success:function(arr){
					// alert(arr);
					for(var i = 1; i < arr.length; i++){
						$(`<h2>"御" Mavic 2<a href="#">查看所有</a></h2>`).appendTo($("#sele-one-r"));
						for(var j = 0; j < arr[i].pro.length; j++){
							$(`	<dl>
								<dt><img src="${arr[i].pro[j].img}" alt="" style="height:70px;width:100px"></dt>
								<dd>${arr[i].pro[j].title}</dd>
							</dl>`).appendTo($("#sele-one-r .div1"));
						}
					}
				},
				error:function(msg){
					console.log(msg);
				}
			})

			/*$.ajax({
				type:"GET",
				url:"../data/select1.json",
				success:function(arr){
					// alert(arr);
					for(var i = 1; i < arr.length; i++){
						$(`	<dl>
								<dt><img src="${arr[i].img}" alt="" style="height:70px;width:100px"></dt>
								<dd>${arr[i].title}</dd>
							</dl>`).appendTo($("#sele-one-r .div2"));
					}
				},
				error:function(msg){
					console.log(msg);
				}
			})*/

			/*$.ajax({
				type:"GET",
				url:"../data/select2.json",
				success:function(arr){
					// alert(arr);
					for(var i = 1; i < arr.length; i++){
						$(`	<dl>
								<dt><img src="${arr[i].img}" alt="" style="height:70px;width:100px"></dt>
								<dd>${arr[i].title}</dd>
							</dl>`).appendTo($("#sele-one-r .div3"));
					}
				},
				error:function(msg){
					console.log(msg);
				}
			})*/

			$("#se-one").hover(function(){
				$(".blind").stop().fadeIn(300,function(){
					$("#sele-one").css("opacity","1");
					$(".se-one").css("border-bottom","1px solid #333");
				});
			},function(){
				// $(".blind").stop().fadeOut(300);
				$(".se-one").css("border-bottom","0");
				
			})
		})
	}
	return {
		select2:select2
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
/*

/*$("#tab").on("mouseover","li",function(){
				$("#tab").find("a").attr("class","");
				$(".se-right").find("#sele-one-r").css("display","none")
				.eq($(this).index()).css("display","block");

				$(this).attr("class","active");
			})*/
