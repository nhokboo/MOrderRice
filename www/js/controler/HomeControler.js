(function (angular) {
	'use strict';
	var myApp = angular.module('myApp');
	myApp.controller('HomeControler', function($scope){
        alert("ok");
		$scope.title = 'Nguyen ngoc Nam';
	});
});