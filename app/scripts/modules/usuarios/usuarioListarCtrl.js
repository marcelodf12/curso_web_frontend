'use strict';
var trackApp = angular.module('app');
trackApp.controller('usuariosListarCtrl', ['$scope','$http','$routeParams', '$location','config',
                          function($scope , $http , $routeParams ,  $location, config) {

    $scope.nuevoUsuario = function(){
      $location.path('/usuario/new');
    };

    $scope.editarUsuario = function(id){
      $location.path('/usuario/'+id);
    };

}]);
