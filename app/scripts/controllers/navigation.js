'use strict';

angular.module('gbaApp').controller('NavCtrl', function($scope, $location) {
	$scope.isActive = function(path) {
		return path === $location.path();
	};

});