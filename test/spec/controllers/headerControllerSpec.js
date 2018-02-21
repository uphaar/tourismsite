'use strict';

describe('Controller: HeaderController', function () {

  // load the controller's module
  beforeEach(function() {
    module('elegantContainerUiApp');
    angular.module('elegantContainerUiApp').config(['cloudinary',function(cloudinaryProvider){

      cloudinaryProvider.set("cloud_name","elegantbytes"); 
    }]);
  
  });


  var HeaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HeaderCtrl = $controller('HeaderController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have the controller instantiated', function() {
    expect(HeaderCtrl).toBeDefined();

  }); 

  it('should set correct active menu', function () {
    
    scope.getActiveMenu('BurjKhalifa'); 
    expect(scope.activeMenu).toEqual('BurjKhalifa');
  });
});
