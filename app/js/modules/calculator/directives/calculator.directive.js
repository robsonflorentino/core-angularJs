var CalculatorDirective = function(){
    return {
        restrict : 'A',
        templateUrl : 'app/js/modules/calculator/directives/templates/calculator.template.html'
    }
}

define([], function(){
   return [CalculatorDirective];
});