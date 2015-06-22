'use strict';

var tsApp = angular.module('tsApp', [
  'ngResource',
  'ngRoute',
  'myApp.controllers',
  'myApp.services',
  'myApp.models',
  'ui.bootstrap'
]);

tsApp.config(function($routeProvider) {
    $routeProvider        
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        })
        
        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'aboutController'
        })
        
        .otherwise({
            redirectTo: '/'
        });
});