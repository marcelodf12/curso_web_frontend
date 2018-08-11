'use strict';
var trackApp = angular.module('app', ['ngRoute']);


trackApp.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
	$locationProvider.html5Mode(true);
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
      templateUrl: 'scripts/modules/usuarios/listar_usuarios.html',
      controller: 'usuariosListarCtrl'
    })
    .when('/usuario/:id', {
      templateUrl: 'scripts/modules/usuarios/usuario.html',
      controller: 'usuarioCtrl'
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
  hostApiRest: 'http://localhost:8081/'
});

trackApp.controller('mainCtrl', ['$scope', '$location', function($scope, $location) {

  $scope.logout = function (){
    $scope.isAuthenticated = true;
    $location.path('home/');
  };

  if(typeof($scope.isAuthenticated) === 'undefined'){
    $scope.logout();
  }

}]);
