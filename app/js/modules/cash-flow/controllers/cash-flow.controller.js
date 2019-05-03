var CashFlowController = function($rootScope, $scope, $translate, $cookies, $cookieStore) { 

  var buildBlankCashFlow = function () {
    return {
      openDate: null,
      closeDate : null,
      billingGoal : 5000,
      previousBalance : 0,
      input : 0,
      output : 0,
      balance : 0,
      movements : {}
    }
  } 

  var buildBlankMovementItem = function () {
    return  {
      id: null,
      description: null,
      type: null,
      value: null
    }
  }

  // criando um modelo para caixa
  var cashFlow = buildBlankCashFlow();

  // criando um modelo para tipo de movimentação de caixa
  cashFlow.movements.types = [
    {id: 1, value: 'Entrada'}, 
    {id: 2, value: 'Saída'}
  ]

  // criando um modelo para movimentação de caixa
  cashFlow.movements.item = buildBlankMovementItem();

  cashFlow.movements.list = [];

  // registrando o modelo
  $scope.cashFlow = cashFlow;

  $scope.event = {}
  $scope.event.cashOpened = false;

  $scope.openCashFlow = function() {
    $scope.cashFlow.openDate = new Date();
    $scope.cashFlow.balance += $scope.cashFlow.previousBalance;
    $scope.event.cashOpened = true;
  }

  $scope.closeCashFlow = function() {
    $scope.cashFlow.closeDate = new Date();
    $scope.event.cashOpened = false;

    var now = new Date(), exp = new Date(now.getFullYear()+1, now.getMonth(), now.getDate());    
    $cookies.put('listNumber', $scope.listNumber, { expires: exp });

    $scope.cashFlow = buildBlankCashFlow();

    alert('Fluxo de caixa Fechado, e registrado com sucesso!')
  }

  $scope.addMovement = function() {
    $scope.cashFlow.movements.list.push($scope.cashFlow.movements.item);

    if($scope.cashFlow.movements.item.type.value == 'Entrada') {
      $scope.cashFlow.input += $scope.cashFlow.movements.item.value;
      $scope.cashFlow.balance += $scope.cashFlow.movements.item.value;
    } else {
      $scope.cashFlow.output += $scope.cashFlow.movements.item.value;
      $scope.cashFlow.balance -= $scope.cashFlow.movements.item.value;
    }

    cashFlow.movements.item = buildBlankMovementItem();
  }

  $scope.removeMovement = function (index) {
    var removed = $scope.cashFlow.movements.list.splice(index, 1);
    if(removed[0].type.value == 'Entrada') {
      $scope.cashFlow.input -= removed[0].value;
      $scope.cashFlow.balance -= removed[0].value;
    } else {
      $scope.cashFlow.output -= removed[0].value;
      $scope.cashFlow.balance += removed[0].value;
    }
  }

  $scope.setMovementType = function(type) {
    $scope.cashFlow.movements.item.type = type;
  }
 
}

define([], function(){
  'use strict';
  return ['$rootScope', '$scope', '$translate', '$cookies', '$cookieStore', CashFlowController];
});