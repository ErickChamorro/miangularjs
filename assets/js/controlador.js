var app = angular.module('mainApp', ['ngRoute']);

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  
  $routeProvider.when('/', { templateUrl: 'login.html'})
  .when('/dashboard', { templateUrl: 'dashboard.html'})
  .when('/contacto', { templateUrl: 'contacto.html'})
  .otherwise({ redirectTo: '/' });
}]);

app.controller('loginController', function($scope, $http) {
  $scope.saludo = 'hola';
  $scope.iniciarSesion = function() {
    alert('bienvenido ' + $scope.usuario);
  }
  $scope.cerrarSesion = function() {
    confirm('¿seguro que desea cerrar sesión?');
  }
});

app.controller('busquedaController', function($scope){
  $scope.valueSearch = document.getElementById('txt_busqueda').value;
  // $scope.mensaje_busqueda = 'Gracias por utilizar nuestro buscador para encontrar: ' + $scope.valueSearch;
});
