'use strict';
var trackApp = angular.module('app');
trackApp.factory('LoginService',
          ['$http', 'config','$sessionStorage', '$localStorage',
  function( $http ,  config , $sessionStorage ,  $localStorage){

  var _login = function(userName, password, successCallback, errorCallback){
    console.log('factory.LoginService : ' + 'login');
    var body = {password : password};
    if(!!userName && !!password){
      $http.post(config.hostApiRestV1 + 'user/' + userName + '/login' , body)
        .then(successCallback,errorCallback);
    }
  };

  var publicInterface = {
    login : _login
  };

  return publicInterface;
}]);
