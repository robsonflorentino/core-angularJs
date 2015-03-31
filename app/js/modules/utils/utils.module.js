var UtilsModule = function(angular, LoDashService) {
    var mod = angular.module('UtilsModule', []);

    // Criando um serviço para acesso aos métodos do lo-dash.js
    mod.factory('$lodash', LoDashService);

    mod.run([function(){
        console.debug('[LOAD-MODULE]', '\'UtilsModule\' foi carregado.');
    }]);

    return mod;
}

define(['angular', 'LoDashService'], UtilsModule);