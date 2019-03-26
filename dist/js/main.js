console.log("ok");
require.config({
	paths:{
		"index":"index",
		"jquery":"jquery-1.10.1.min",
		"jquery-cookie":"jquery.cookie",
		"parabola":"parabola",
		"select1":"select_pre",
		"tab":"tab",
		"banner":"banner",
		"slide":"slide",
		"glass":"glass",
		"mavic":"mavic",
		"total":"sc_total",
		"nav":"nav",
		"show_car":"show_car"
	},
	shim:{
		"jquery-cookie":["jquery"],
		"parabola":{
			exports:"_"
		}
	}
})


require(["index"], function(index){
	index.index();
})

