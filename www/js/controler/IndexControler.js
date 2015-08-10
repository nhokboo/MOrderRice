(function (angular) {
    'use strict';
    var myApp = angular.module('myApp');
    myApp.controller('IndexControler', function($scope){
        $scope.title = 'MOrder';


        $scope.tabs = [{
            id: 'home',
            title: 'Home',
            url: 'partials/home.html'

        },
            {
                id: 'setting',
            title: 'Setting',
            url: 'partials/setting.html'
        },{
                id:'report',
                title: 'Report',
                url: 'partials/report.html'
            }

        ];

        $scope.currentTab = 'partials/home.html';

        $scope.onClickTab = function (tab) {
            $scope.currentTab = tab.url;
        };

        $scope.isActiveTab = function(tabUrl) {
            return tabUrl == $scope.currentTab;
        };
    });
})(window.angular);