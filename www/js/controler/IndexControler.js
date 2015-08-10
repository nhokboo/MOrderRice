(function (angular) {
    'use strict';
    var myApp = angular.module('myApp');
    myApp.controller('IndexControler', function($scope){
        $scope.title = 'MOrder';


        $scope.tabs = [{
            title: 'One',
            url: 'one.tpl.html'
        }, {
            title: 'Two',
            url: 'two.tpl.html'
        }, {
            title: 'Three',
            url: 'three.tpl.html'
        }];

        $scope.currentTab = 'one.tpl.html';

        $scope.onClickTab = function (tab) {
            $scope.currentTab = tab.url;
        };

        $scope.isActiveTab = function(tabUrl) {
            return tabUrl == $scope.currentTab;
        };




        $scope.RadioChecked = {
            id: 0
        };
        $scope.data =[
            {
                id:0,
                name: 'Cá viên chiên'
            },
            {
                id:1,
                name: 'cá kho'
            },
            {
                id:2,
                name: 'thịt viên chiên'
            },
            {
                id:3,
                name: 'thịt heo quay'
            }
        ];


        $scope.setFood=function(){
            alert($scope.RadioChecked.id);
        }
    });
})(window.angular);