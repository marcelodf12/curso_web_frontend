'use strict';
var trackApp = angular.module('app');
trackApp.controller('loginCtrl', ['$scope','$http','$routeParams', '$location','config',
                          function($scope , $http , $routeParams ,  $location, config) {

  $scope.salir = function(){
    $scope.$parent.isAuthenticated = false;
  }();

  $scope.login = function(){
    $scope.$parent.isAuthenticated = true;
    $location.path('home/');
  };

}]);
