var getContextPath = function(){
  return '/' + window.location.pathname.split('/')[1];
}


define([
    'angular',
    'ngRoute',
    'ngCookies',
    'ngStorageCookies',
    'ngDynamicLocale',
    'ngTranslate',
    'ngTranslateLoaderStaticFiles',
    'bootstrap',
    'UtilsModule'
], function(angular){

    var app = angular.module('app', ['ngRoute', 'ngCookies', 'pascalprecht.translate', 'UtilsModule']);

    app.config(['$translateProvider', function($translateProvider){
      
        console.debug('[APP-CONFIG]','Aplicando configurações iniciais.');
      
        console.debug('[APP-CONFIG]','Configurando tradutores e loalizadores');
        
        $translateProvider.useStaticFilesLoader({
          prefix: 'app/js/languages/',
          suffix: '.json'
        });
      
        $translateProvider.preferredLanguage('pt-br');
        $translateProvider.useCookieStorage();
      
    }]);

    app.run(['$rootScope', function($rootScope) {
        console.debug('[APP-START]','Aplicação Inicializada.');
    }]);

    return app;
});