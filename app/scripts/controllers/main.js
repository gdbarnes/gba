'use strict';

/**
 * @ngdoc function
 * @name gbaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gbaApp
 */
angular.module('gbaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
