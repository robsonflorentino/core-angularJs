var CashFlowModule = function(angular, LoDashService, CashFlowController) {
    var mod = angular.module('CashFlowModule', ['ngCookies']);

    // Criando um serviço para acesso aos métodos do lo-dash.js
    mod.factory('$lodash', LoDashService);
  
    // Criando um controller para movimentação de caixa
    mod.controller('CashFlowController', CashFlowController);

    mod.run([function(){
        console.debug('[LOAD-MODULE]\t', 'CashFlowModule foi carregado.');
    }]);

    return mod;
}

define(['angular', 'LoDashService', 'CashFlowController'], CashFlowModule);