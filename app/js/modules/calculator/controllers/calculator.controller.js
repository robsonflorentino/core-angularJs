var CalculatorController = function($scope, $calculatorService) {
    $scope.entity = {};

    $scope.entity.calculator = {
        "base" : 0,
        "parcela" : 0,
        "operador" : "=",
        "total" : 0
    }

    $scope.actions = {}
    $scope.actions.add = function() {
        $scope.entity.calculator.operador = "+";
        $scope.entity.calculator.total = $calculatorService.add($scope.entity.calculator.base, $scope.entity.calculator.parcela);
    }

    $scope.actions.subtract = function() {
        $scope.entity.calculator.operador = "-";
        $scope.entity.calculator.total = $calculatorService.subtract($scope.entity.calculator.base, $scope.entity.calculator.parcela);
    }

    $scope.actions.multiply = function(){
        $scope.entity.calculator.operador = "x";
        $scope.entity.calculator.total = $calculatorService.multiply($scope.entity.calculator.base, $scope.entity.calculator.parcela);
    }

    $scope.actions.divide = function(){
        $scope.entity.calculator.operador = "/";
        if($scope.entity.calculator.parcela != 0) {
            $scope.entity.calculator.total = $calculatorService.divide($scope.entity.calculator.base, $scope.entity.calculator.parcela);
        } else {
            throw new RangeError("Não é possível dividir por 0");
        }

    }

}

define([], function(){
   return ['$scope', '$calculatorService', CalculatorController];
});