define(["jquery","jquery-cookie"],function($){
	function sc_total(node){
		$(function(){
			if($.cookie("goods")){
				var cookieStr = $.cookie("goods");
				var cookieArr = eval(cookieStr);
				var total = 0;
				for(var i = 0; i < cookieArr.length; i++){
					total += cookieArr[i].num;
				}
			}

			// alert(total);
			$(node).html(total);

			//移入到购物车上的时候显示
			
		})
	}
	return{
		total:sc_total
	}
})