var CalculatorModule = function(angular, CalculatorDirective, CalculatorController, CalculatorService) {
    var mod = angular.module('CalculatorModule', []);

    // services
    mod.factory('$calculatorService', CalculatorService);

    // controllers
    mod.controller('CalculatorController', CalculatorController);

    // directives
    mod.directive('clkCalculator', CalculatorDirective);

    mod.run([function(){
        console.debug('[LOAD-MODULE]', '\'CalculatorModule\' foi carregado.');
    }]);

    return mod;
}

define(['angular', 'CalculatorDirective', 'CalculatorController', 'CalculatorService'], CalculatorModule);