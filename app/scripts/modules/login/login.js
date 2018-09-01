'use strict';
var trackApp = angular.module('app');
trackApp.controller('loginCtrl', ['$scope', '$location','LoginService','$localStorage',
                          function($scope ,  $location , LoginService , $localStorage) {

  $scope.salir = function(){
    $scope.$parent.isAuthenticated = false;
  }();

  $scope.login = function(){
    LoginService.login($scope.userName, $scope.password,
    function(response){
      $scope.$parent.isAuthenticated = true;
      $localStorage.token = response.data.data;
      $location.path('home/');
    },
    function(response){
      console.log('callback - error');
      console.log(response);
    }
    );
    console.log('controller.loginCtrl : ' + 'login');
  };

}]);
