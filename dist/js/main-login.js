require.config({
	paths:{
		"jquery":"jquery-1.10.1.min",
		"jquery-cookie":"jquery.cookie",
		"parabola":"parabola",
		"login":"login",
		"login_submit":"login_submit",
		"login_verify":"login_verify"

	},
	shim:{
		"jquery-cookie":["jquery"],
		"parabola":{
			exports:"_"
		}
	}
})

require(["login"],function(login){
	login.login();
})