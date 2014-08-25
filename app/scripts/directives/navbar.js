'use strict';

angular.module('gbaApp').directive('navbar', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/navbar.html',
		controller: 'NavCtrl'
	};
});