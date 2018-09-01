'use strict';
var trackApp = angular.module('app');
trackApp.controller('usuarioCtrl', ['$scope','$http','$routeParams', '$location','UsuarioService',
                          function($scope , $http , $routeParams ,  $location, UsuarioService) {
  if($routeParams.id === 'new'){
    $scope.title = 'Nuevo Usuario';
  }else{
    $scope.title = 'Modificar Usuario';
  }

  UsuarioService.listClientes(
    function successCallback(response){
      console.log('successCallback');
      console.log(response.data);
    },
    function errorCallback(response){
      console.log('errorCallback');
      console.log(response.data);
    }
  );

}]);

