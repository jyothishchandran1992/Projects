var app = angular.module('LoginPage', []);
app.directive('ValidateForm', function() {
  return {
	restrict: 'E',
    template: 'Name: {{customer.name}} Address: {{customer.address}}'
  };
});