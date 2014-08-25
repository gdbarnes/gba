'use strict';

angular.module('gbaApp').controller('NavCtrl', function($scope, $location) {
	$scope.isActive = function(path) {
		var currentPath = $location.path().split('/')[1].split('?')[0];
		return currentPath === path.split('/')[1];
	};

});