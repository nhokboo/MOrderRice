var module = angular.module('myApp', ['ngTouch','ngCookies','ngRoute', 'ngResource']);


module.config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {
    $routeProvider
        .when('/',
        {
        	templateUrl: 'partials/login.html',
        	controller: 'LoginControler'
        })
        .when('/home',
        {
        	templateUrl: 'partials/home.html',
        	controller: 'HomeControler'
        })
        .when('/setting',{
            templateUrl: 'partials/setting.html',
            controler: 'SettingControler'
        }
    )

        ;

    $routeProvider.otherwise({redirectTo: '/'});

}]);