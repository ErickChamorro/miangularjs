var app = angular.module('mainApp', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({ enabled: true, requireBase: false });
  $locationProvider.hashPrefix('');

  $routeProvider.when('/miangularjs/login', { templateUrl: 'app/components/login/login.html'});
  $routeProvider.when('/dashboard', { templateUrl: 'app/components/dashboard/dashboard.html'});
  $routeProvider.otherwise({ redirectTo: '/miangularjs/login' });
}]);