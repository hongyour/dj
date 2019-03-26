//验证用户名
function testNameFunc(){
	var oUsername = document.getElementById('username');
	var oPsd = document.getElementById('password');
	var oValue = oUsername.value;
	oValue = oValue.replace(/ /g,"");
	oUsername.value = oValue;
	//第一个字母
	var par = /^[a-zA-Z]+/;
	if(oValue.length <= 6 || oValue.length >= 20){
		alert("用户名长度为6-18位");
	}else if(!(par.test(oValue))){
		alert("用户名必须以字母开头");
	}else{
		for(var i = 0; i < oValue.length; i++){
			if(!(/[\w]/.test(oValue[i]))){
				alert("用户名只能由数字、字母、下划线构成") ;
				break;
			}else{
				alert("验证成功");
				break;
			}
		}
	}
}