'use strict';

describe('Controller: MainCtrl', function () {

  var location, scope;

  beforeEach(module('gbaApp'));

  beforeEach(inject(function($controller, $rootScope, $location) {
    location = $location;
    scope = $rootScope.$new();
    $controller('NavCtrl', {
      $scope: scope
    });
  }));

  describe('isActive', function() {
    it('returns true when paths are the same', function() {
      location.path('/test');
      expect(scope.isActive('/test')).toBeTruthy();
    });
    it('returns false when paths are different', function() {
      location.path('/different');
      expect(scope.isActive('/test')).toBeFalsy();
    });
    it('returns true if it starts with the same word', function() {
      location.path('/test/1/show');
      expect(scope.isActive('/test')).toBeTruthy();
    });

  });


});
