'use strict';
var trackApp = angular.module('app');
trackApp.factory('UsuarioService',
          ['$http', 'config','$sessionStorage', '$localStorage',
  function( $http ,  config , $sessionStorage ,  $localStorage){
  var _varPrivate = 1;

  var _listClientes = function(successCallback,errorCallback){
    $http.get(config.hostApiRestV1 + 'sucursal/')
    .then(successCallback,errorCallback);
  };

  var _getCliente = function(){
    console.log($sessionStorage.cliente);
    _varPrivate+=1;
  };

  var _updateCliente = function(){
    console.log('updateCliente ' + _varPrivate);
    _varPrivate+=1;
  };

  var _putCliente = function(){
    if(!$sessionStorage.cliente) {$sessionStorage.cliente = new Date();}
    if(!$localStorage.cliente) {$localStorage.cliente = new Date();}
    console.log('putCliente ' + _varPrivate);
    _varPrivate+=1;
  };

  var _deleteCliente = function(){
    console.log('deleteCliente ' + _varPrivate);
    _varPrivate+=1;
  };

  var publicInterface = {
    listClientes : _listClientes,
    getClientes : _getCliente,
    updateCliente : _updateCliente,
    putCliente : _putCliente,
    deleteCliente: _deleteCliente
  };

  return publicInterface;
}]);

trackApp.factory('RequestHeadersInterceptor', ['$localStorage',function($localStorage)
{
      var request = function request(config)
      {
          config.headers['authorizatio'] = $localStorage.token;
          return config;
      };

      return {
          request: request
      };
}]);
