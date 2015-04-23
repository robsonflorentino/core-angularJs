var UtilsModule = function(angular, LoDashService, LanguageController) {
    var mod = angular.module('UtilsModule', []);

    // Criando um serviço para acesso aos métodos do lo-dash.js
    mod.factory('$lodash', LoDashService);
  
    // Criando um controller para setar idiomas
    mod.controller('LanguageController', LanguageController);

    mod.run([function(){
        console.debug('[LOAD-MODULE]', '\'UtilsModule\' foi carregado.');
    }]);

    return mod;
}

define(['angular', 'LoDashService', 'LanguageController'], UtilsModule);