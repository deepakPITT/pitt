'use strict';

describe('myApp.home module', function() {

  beforeEach(module('myApp.home'));

  describe('research controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var homeCtrl = $controller('ResearchCtrl');
      expect(homeCtrl).toBeDefined();
    }));

  });
});