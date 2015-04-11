var appRoutes = function(app) {

    app.config(['$routeProvider', '$locationProvider', '$httpProvider',
        function($routeProvider, $locationProvider, $httpProvider){
            $locationProvider.hashPrefix('!');
          
            $routeProvider.when('/calculadora', {
              templateUrl : 'app/views/calculadora/calculadora.view.html',
              controller : 'CalculadoraController'
            })

            $routeProvider.otherwise({
                redirectTo : '/'
            });
        }
    ]);

    return app;
}

define(['app-modules'], appRoutes);