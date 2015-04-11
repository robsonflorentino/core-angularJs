/**
 * Created by robson_florenti on 27/03/2015.
 */
require.config({

    /**
     * Criando um alias para as bibliotecas que serão utilizadas.
     */
    paths : {
        'jQuery' : '../vendor/jquery/dist/jquery.min',
        'bootstrap' : '../vendor/bootswatch-dist/js/bootstrap.min',
        'angular' : '../vendor/angular/angular.min',
        'ngRoute' : '../vendor/angular-route/angular-route',
        'loDash' : '../vendor/lodash/lodash.min',

        // Utilitarios
        'LoDashService' : 'modules/utils/services/loDash.service',
        'UtilsModule' : 'modules/utils/utils.module',
      
        // Calculador
        'CalculadoraService' : 'modules/calculadora/services/calculadora.service',
        'CalculadoraController' : 'modules/calculadora/controllers/calculadora.controller', 
        'CalculadoraDirective' : 'modules/calculadora/directives/calculadora.directive',
        'CalculadoraModule' : 'modules/calculadora/calculadora.module'
    },

    /**
     * O angular não suporta bibliotecas fora de um módulo
     * Utilize o shim para incluir bibliotecas de contexto global
     * dentro do contexto do AMD.
     */
    shim : {

        'jQuery' : {
            exports : '$'
        },

        'loDash' : {
            exports : '_'
        },

        'angular' : {
            exports : 'angular',
            deps : ['jQuery']
        },

        'ngRoute' : {
            deps : ['angular']
        },

        'bootstrap' : {
            exports : 'bootstrap',
            deps : ['jQuery']
        }
    },

    deps : ['./app/js/app-init.js']
});

