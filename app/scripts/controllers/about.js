'use strict';

/**
 * @ngdoc function
 * @name gbaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gbaApp
 */
angular.module('gbaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
