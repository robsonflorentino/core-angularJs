/*global define: false*/
/*global console: false*/
var CalculadoraDirective = function(){
  'use strict';
  return {
    restrict : 'A',
    templateUrl : 'app/js/modules/calculadora/directives/templates/calculadora.template.html'
  };
}

define([], function(){
  return [CalculadoraDirective];
});