      var app = angular.module('LoginPage', []);
app.controller('LoginPageController', function($scope) {
	$scope.email = {
		text : "",
		class : "form-group has-error"
	};
});
