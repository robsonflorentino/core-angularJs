define([
    'angular',
    'ngRoute',
    'UtilsModule',
    'CalculatorModule'
], function(angular){

    var app = angular.module('app', ['ngRoute', 'UtilsModule', 'CalculatorModule']);

    app.config([function(){
        console.debug('[APP-CONFIG]','Aplicando configurações iniciais.');
    }]);

    app.run(['$rootScope', function($rootScope) {
    }]);

    return app;
});