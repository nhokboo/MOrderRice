(function (angular) {
    'use strict';
    var myApp = angular.module('myApp');
    myApp.controller('HomeControler', function($scope){
        $scope.title = 'MOrder';
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
        };
    });
})(window.angular);