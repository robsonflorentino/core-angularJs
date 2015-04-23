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
        'ngCookies' : '../vendor/angular-cookies/angular-cookies.min',
        'ngStorageCookies' : '../vendor/angular-translate-storage-cookie/angular-translate-storage-cookie.min',
        'ngDynamicLocale' : '../vendor/angular-dynamic-locale/dist/tmhDynamicLocale',
        'ngTranslate' : '../vendor/angular-translate/angular-translate.min',
        'ngTranslateLoaderStaticFiles' : '../vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.min',
        'loDash' : '../vendor/lodash/lodash.min',

        // Utilitarios
        'LoDashService' : 'modules/utils/services/loDash.service',
        'LanguageController': 'modules/utils/controllers/language.controller',
        'UtilsModule' : 'modules/utils/utils.module'
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
      
        'ngCookies' : {
            deps : ['angular']
        },
      
        'ngStorageCookies' : {
          deps : ['angular', 'ngCookies']
        },
      
        'ngDynamicLocale' : {
          deps : ['angular']
        },
      
        'ngTranslate' : {
            deps : ['angular']
        },

        'ngTranslateLoaderStaticFiles' : {
          deps : ['angular', 'ngTranslate']
        },
      
        'bootstrap' : {
            exports : 'bootstrap',
            deps : ['jQuery']
        }
    },

    deps : ['./app/js/app-init.js']
});

