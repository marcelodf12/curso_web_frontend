'use strict';
var trackApp = angular.module('app', ['ngRoute','ngStorage']);


trackApp.config(['$routeProvider','$locationProvider', '$httpProvider' , function($routeProvider,$locationProvider, $httpProvider) {
  $locationProvider.html5Mode(true);
  $httpProvider.interceptors.push('RequestHeadersInterceptor');
  $routeProvider
    .when('/login', {
      templateUrl: 'scripts/modules/login/login.html',
      controller: 'loginCtrl'
    })
    .when('/home', {
      templateUrl: 'scripts/modules/home/home.html',
      controller: 'homeCtrl'
    })
    .when('/usuarios', {
      templateUrl: 'scripts/modules/usuarios/listarUsuarios.html',
      controller: 'usuariosListarCtrl'
    })
    .when('/usuario/:id', {
      templateUrl: 'scripts/modules/usuarios/usuario.html',
      controller: 'usuarioCtrl'
    })
    .when('/clientes', {
      templateUrl: 'scripts/modules/usuarios/listarClientes.html',
      controller: 'clienteListarCtrl'
    })
    .when('/cliente/:id', {
      templateUrl: 'scripts/modules/usuarios/client.html',
      controller: 'clienteCtrl'
    })
    .otherwise({
      templateUrl: '404.html'
    });
}]);
trackApp.constant('mensajes', {
  errorConexion: 'Error al conectarse al servidor. ',
  recordatorioGuardar:'Recuerde guardar los cambios antes de ir a otra pagina.',
  noGuardado:'Se ha restablecido la configuración.',
  catedraNoSeleccionada:'Debe seleccionar una cátedra',
  notFound:'Error 404: El elemento no existe'
});
trackApp.constant('config', {
  hostApiRestV1: 'http://localhost:8081/reservation-api/api/v1/'
});

trackApp.controller('mainCtrl', ['$scope', '$location', 'UsuarioService', function($scope, $location, UsuarioService) {

  $scope.logout = function (){
    $scope.isAuthenticated = false;
    $location.path('login/');
  };

  if(typeof($scope.isAuthenticated) === 'undefined'){
    $scope.logout();
  }

}]);
