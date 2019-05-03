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
              templateUrl : 'app/views/default/home.view.html',
            });
          
            $routeProvider.when('/cash-flow', {
              templateUrl : 'app/views/cash-flow/cash-flow.view.html',
              controller: 'CashFlowController'
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