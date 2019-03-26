define(["jquery","jquery-cookie"],function($){
	function sure(node){
		$(function(){
			$.ajax({
				url:"data/shop.json",
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						
					}
				},
				error:function(error){
					alert(error);
				}
			})

			/*$(node).on("click",function(){
				//判断是否是以第一创建cookie'
				//var ID = this.id;
				var first = $.cookie("goods") == null ? true : false;
				if(first){
					var arr = [{id:ID,num:1}]
					$.cookie("goods",JSON.stringify(arr),{
						expires: 7
					})
				}else{
					//判断是不是第一次加入购物车
					var isSame = false;
					var cookieStr = $.cookie("goods");
					var arr = eval(cookieStr);
					for(var i = 0; i < arr.length; i++){
						if(arr[i].id == ID){
							arr[i].num ++;
							isSame = true;
							break;
						}
					}
					//如果是第一次加入
					if(!isSame){
						var obj = {id:ID,num:1};
						arr.push(obj);
					}

					$.cookie("goods",JSON.stringify(arr),{
						expires:7
					})
				}
			})*/
		})

	}
	return{
		sure:sure
	}
})