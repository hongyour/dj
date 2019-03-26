require.config({
	paths:{
		"jquery":"jquery-1.10.1.min",
		"jquery-cookie":"jquery.cookie",
		"parabola":"parabola",
		"care_car":"care_car"
	},
	shim:{
		"jquery-cookie":["jquery"],
		"parabola":{
			exports:"_"
		}
	}
})

require(["care"],function(care){
	care.care();
})