var app = angular.module('mainApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  // $locationProvider.html5Mode({ enabled: true, requireBase: false });
  $locationProvider.hashPrefix('');

  $routeProvider.when('/', { templateUrl: 'index.html'});
  $routeProvider.when('/dashboard', { templateUrl: 'dashboard.html'});
  $routeProvider.otherwise({ redirectTo: '/' });
}]);

app.controller('mainController', function($scope, $http) {
  $scope.saludo = 'hola';
  $scope.usuario = '';
  $scope.iniciarSesion = function() {
    alert('bienvenido ' + $scope.usuario);
  }
});
