"use strict";

angular.module('loader')
    .directive('about', function() {
        return {
            restrict: 'A',
            replace:true,
            templateUrl: 'views/about.html',
            link: function($scope, $element, $attrs, ngModel) {
                $scope.toggle = function(){
                	console.log("here");
                	$element.toggleClass("open");
                }
            }
        };
    });