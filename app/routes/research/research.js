'use strict';

angular.module('myApp.research', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/research', {
    templateUrl: 'routes/research/research.html',
    controller: 'ResearchCtrl'
  });
}])

.controller('ResearchCtrl', ['$scope', function($scope) {

}]);