var appRoutes = function(app) {

    app.config(['$routeProvider', '$locationProvider', '$httpProvider',
        function($routeProvider, $locationProvider, $httpProvider){
            $locationProvider.hashPrefix('!');
          
            // Exercício Calculadora
//            $routeProvider.when('/samples', {
//              templateUrl : 'app/views/samples/sample.view.html',
//              controller : 'SampleController'
//            });
          
            $routeProvider.when('/', {
              templateUrl : 'app/views/default/home.view.html'
            });
          
            $routeProvider.when('/cotacao', {
              templateUrl : 'app/views/cotacao/cotacao.view.html'
            });
          
            $routeProvider.when('/authenticator', {
              templateUrl : 'app/views/authenticator/authenticator.view.html'
            });

            // Home
            $routeProvider.otherwise({
                redirectTo : '/'
            });
        }
    ]);

    return app;
}

define(['app-modules'], appRoutes);