console.log("ok");
require.config({
	paths:{
		"jquery":"jquery-1.10.1.min",
		"jquery-cookie":"jquery.cookie",
		"parabola":"parabola",
		"glass":"glass",
		"sure":"sure"
	},
	shim:{
		"jquery-cookie":["jquery"],
		"parabola":{
			exports:"_"
		}
	}
})


require(["details"], function(details){
	details.details();
})

