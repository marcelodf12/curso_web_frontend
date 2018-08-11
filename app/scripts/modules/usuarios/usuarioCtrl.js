'use strict';
var trackApp = angular.module('app');
trackApp.controller('usuarioCtrl', ['$scope','$http','$routeParams', '$location','config',
                          function($scope , $http , $routeParams ,  $location, config) {
  if($routeParams.id === 'new'){
    $scope.title = 'Nuevo Usuario';
  }else{
    $scope.title = 'Modificar Usuario';
  }

}]);
