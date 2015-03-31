var CalculatorService = function() {

    // privados
    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide (a, b) {
        return a / b;
    }

    // publicos
    return {
        "add": add,
        "subtract": subtract,
        "multiply": multiply,
        "divide": divide
    }

}

define([], function(){
    return [CalculatorService];
})