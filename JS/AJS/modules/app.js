(function(){
	var app = angular.module('store',[]);
	app.controller('StoreController',function(){
		this.products=gem;
	});
	var gem = [{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Dodecahedron',
		ableToPurchase: true,
		soldOut: false,
	},
	{
		name: 'Dodecahedron1',
		price: 2.95,
		description: 'Dodecahedron',
		ableToPurchase: true,
		soldOut: false,
		
	},
	{
		name: 'Dodecahedron2',
		price: 2.95,
		description: 'Dodecahedron',
		ableToPurchase: true,
		soldOut: false,
		
	}]
})();