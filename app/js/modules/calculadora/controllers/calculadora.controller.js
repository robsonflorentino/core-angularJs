/*global define: false*/
/*global console: false*/
var CalcudadoraController = function ($scope, $calculadoraService) {
  'use strict';
  
  // Form fields
  $scope.form = {};
  $scope.form.titulo = "Calculadora";
  $scope.form.hasMessage = false;
  
  // Calc attributes
  $scope.calc = {};
  $scope.calc.param1 = 0;
  $scope.calc.param2 = 0;
  $scope.calc.operacao = "   ";
  $scope.calc.result = 0;
  
  // Calc operations
  $scope.calc = $scope.calc || {}; 
  $scope.calc.actions = {};
  
  // Somar
  $scope.calc.actions.somar = function() {
    $scope.calc.operacao = " + ";
    $calculadoraService.aplicar('soma', $scope.calc.param1, $scope.calc.param2, onSuccess, onError);
  }
  
  // Subtrair
  $scope.calc.actions.subtrair = function() {
    $scope.calc.operacao = " - ";
    $calculadoraService.aplicar('subtracao', $scope.calc.param1, $scope.calc.param2, onSuccess, onError);
  }
  
  // Multiplicar
  $scope.calc.actions.multiplicar = function() {
    $scope.calc.operacao = " x ";
    $calculadoraService.aplicar('multiplicacao', $scope.calc.param1, $scope.calc.param2, onSuccess, onError);
  }
  
  // Dividir
  $scope.calc.actions.dividir = function() {
    $scope.calc.operacao = " : ";
    $calculadoraService.aplicar('divisao', $scope.calc.param1, $scope.calc.param2, onSuccess, onError);
  }
  
  // Limpar Operacao
  $scope.calc.actions.clrs = function () {
      $scope.calc.param1 = 0;
      $scope.calc.param2 = 0;
      $scope.calc.operacao = "   ";
      $scope.calc.result = 0;
      $scope.form.hasMessage = false;
  }
  
  function onSuccess(data) {
    if(data) {
      $scope.form.hasMessage = true;
      $scope.form.isSuccess = data.isSuccess;
      $scope.form.message = data.message;
      $scope.calc.result = data.result;
    }
  }
  
  function onError(data) {
    if(data) {
      $scope.form.hasMessage = true;
      $scope.form.isSuccess = data.isSuccess;
      $scope.form.message = data.message;
      $scope.calc.result = data.result;
    }
  }
  
};

define([], function () {
  'use strict';
  return ['$scope', '$calculadoraService', CalcudadoraController];
});