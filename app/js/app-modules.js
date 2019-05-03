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
    'UtilsModule',
    'CashFlowModule'
], function(angular){

    var app = angular.module('app', ['ngRoute', 'ngCookies', 'pascalprecht.translate', 'tmh.dynamicLocale', 'UtilsModule', 'CashFlowModule']);

    app.config(['$translateProvider', 'tmhDynamicLocaleProvider', function($translateProvider, tmhDynamicLocaleProvider){
      
        console.debug('[APP-CONFIG]\t','Aplicando configurações iniciais.');
      
        console.debug('[APP-CONFIG]\t','Configurando tradutores');
        $translateProvider.useStaticFilesLoader({
          prefix: 'app/js/languages/',
          suffix: '.json'
        });
      
        console.debug('[APP-CONFIG]\t','Configurando l10n.');
        $translateProvider.preferredLanguage('pt-br');
        $translateProvider.fallbackLanguage(['en-us']);
        $translateProvider.useCookieStorage();
      
        console.debug('[APP-CONFIG]\t','Configurando i18n.');
        tmhDynamicLocaleProvider.defaultLocale("pt-br");
        tmhDynamicLocaleProvider.localeLocationPattern('app/vendor/angular-i18n/angular-locale_{{locale}}.js');
        tmhDynamicLocaleProvider.useStorage('$cookieStore');
      
    }]);

    app.run(['$rootScope', function($rootScope) {
        console.debug('[APP-START]\t\t','Aplicação Inicializada.');
    }]);

    return app;
});