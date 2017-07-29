'use strict';

describe('Controller: PartnersCtrl', function () {

  // load the controller's module
  beforeEach(module('micromedicaApp'));

  var PartnersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PartnersCtrl = $controller('PartnersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PartnersCtrl.awesomeThings.length).toBe(3);
  });
});
