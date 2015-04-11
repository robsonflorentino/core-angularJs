/*global define: false*/
/*global console: false*/
var CalculadoraService = function($lodash){
  
  var Message = function(isSuccess, message, result) {
      this.isSuccess = isSuccess;
      this.message = message;
      this.result = result;
  }
  
  function somar (x, y) {
    return x + y;
  }
  
  function subtrair (x, y) {
    return x - y;
  }
  
  function multiplicar (x, y) {
    return x * y;
  }
  
  function dividir (x, y) {
    return x / y;
  }
  
  function aplicar (opecacao, param1, param2, onSuccess, onError) {
    
    if(typeof(onSuccess) !== 'function' || typeof(onSuccess) !== 'function') {
      throw RangeError('Chamada para função não atende os requisitos de declaração');
    }
    
    if ($lodash.isEmpty(opecacao)) {
      onError(new Message(false, "Não solicitada nenhuma operação!", 0));
    }
    
    if ($lodash.isEmpty(param1) && $lodash.isNumber(param1)) {
      onError(new Message(false, "O primeiro parametro não foi preenchido adequadamente!", 0));
    } 
    
    if ($lodash.isEmpty(param2) && $lodash.isNumber(param2)) {
      onError(new Message(false, "O segundo parametro não foi preenchido adequadamente!", 0));
    } 
    
    switch (opecacao) {
        case 'soma':
          onSuccess(new Message(true, "Resultado da soma obtido com sucesso!", somar(param1, param2)));
          break;
        
        case 'subtracao':
          onSuccess(new Message(true, "Resultado da subtração obtido com sucesso!", subtrair(param1, param2)));
          break;
        
        case 'multiplicacao':
          onSuccess(new Message(true, "Resultado da multiplicação obtido com sucesso!", multiplicar(param1, param2)));
          break;
        
        case 'divisao':
          if (param2 != 0) {
            onSuccess(new Message(true, "Resultado da divisão obtido com sucesso!", somar(param1, param2)));
          } else {
            onError(new Message(false, "Não é possível dividir " + param1 + " por 0!", 0));
          }
          break;
        
        default:
          return new Message(false, "Operação não disponível na lista de comandos!", 0);
    }
  };
   
  return {
    'aplicar' : aplicar
  }
}

define([], function(){
  return ['$lodash', CalculadoraService];
});