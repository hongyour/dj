define(["verify","jquery","jquery-cookie"],function(verify,$){
	function register(){
		$(function(){
			var oPsd = $("#password");
			// var oValue = oPsd.val();
			$("#sub").click(function(){
				verify.verify();				
			})

			$("#password").keyup(function(){
				change();
			})

			function change(){
				var dangrous = new RegExp("(?=.{6,}).*", "g");
				var medium = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g"); 
				var strong = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g"); 
				if(false == dangrous.test(oPsd.val())){
					$(".psd_l1").attr("class","dangrous");
				}else if(medium.test(oPsd.val())){
					$(".psd_l1").removeClass("dangrous");
					$(".psd_l2").attr("class","medium");
				}else if(strong.test(oPsd.val())){
					$(".psd_l2").removeClass("medium");
					$(".psd_l3").attr("class","strong");
				}else{
					$(".psd_l1").attr("class","dangrous");
				}
				return true;
			}
		})
	}
	return{
		register:register
	}
})