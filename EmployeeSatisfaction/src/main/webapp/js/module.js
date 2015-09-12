var app = angular.module('LoginPage', []);
app.controller('LoginPageController', function($scope) {
	$scope.email = {
		text : "email@domain.com",
	};
	$scope.pwd = {
		text : "",
	};
	
	
});
