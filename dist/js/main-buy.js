require.config({
	paths:{
		"jquery":"jquery-1.10.1.min",
		"jquery-cookie":"jquery.cookie",
		"parabola":"parabola"
	},
	// waitSeconds: 0,
	shim:{
		"jquery-cookie":["jquery"],
		"parabola":{
			exports:"_"
		}
	}
})

require(["buy"],function(buy){
	buy.buy();
})