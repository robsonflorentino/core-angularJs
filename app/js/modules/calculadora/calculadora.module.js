/*global define: false*/
/*global console: false*/
var CalculadoraModule = function (angular, CalculadoraDirective, CalculadoraController, CalculadoraService) {
  'use strict';
  
  var mod = angular.module('CalculadoraModule', []);
  
  mod.directive('calcDirective', CalculadoraDirective);
  
  mod.controller('CalculadoraController', CalculadoraController);
  
  mod.factory('$calculadoraService', CalculadoraService);
  
  mod.run([ function () {
    console.debug('[LOAD-MODULE]', '\'CalculadoraModule\' foi carregado.');
  }]);
  
  return mod;
};


define(['angular', 'CalculadoraDirective', 'CalculadoraController', 'CalculadoraService'], CalculadoraModule);