'use strict';

angular.module('tsApp.controllers', [])
        .controller('homeController', function ($scope) {
            $scope.message = "HOME PAGE!";    
        })
        
        .controller('aboutController', function ($scope) {
            $scope.message = "ABOUT PAGE!";    
        });