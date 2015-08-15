      var app = angular.module('LoginPage', []);
app.controller('LoginPageController', function($scope) {
	$scope.email = {
		text : "",
		valid : true,
		errorrequiredempty : "Email Address is required",
		errorrequiredminlength : "Your Email Address is too short",
		errorrequiredvalid : "Please provide a valid Email Address",
		class : "form-group has-error"
		};
});
