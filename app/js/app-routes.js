var appRoutes = function(app) {

    app.config(['$routeProvider', '$locationProvider', '$httpProvider',
        function($routeProvider, $locationProvider, $httpProvider){
            $locationProvider.hashPrefix('!');

            $routeProvider.when('/calculator', {
                templateUrl : 'app/views/calculator/calculator.view.html',
                controller : 'CalculatorController'
            });

            $routeProvider.otherwise({
                redirectTo : '/'
            });
        }
    ]);

    return app;
}

define(['app-modules'], appRoutes);