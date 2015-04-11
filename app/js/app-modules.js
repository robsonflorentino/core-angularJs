define([
    'angular',
    'ngRoute',
    'UtilsModule',
    'CalculadoraModule'
], function(angular){

    var app = angular.module('app', ['ngRoute', 'UtilsModule', 'CalculadoraModule']);

    app.config([function(){
        console.debug('[APP-CONFIG]','Aplicando configurações iniciais.');
    }]);

    app.run(['$rootScope', function($rootScope) {
        console.debug('[APP-START]','Aplicação Inicializada.');
    }]);

    return app;
});