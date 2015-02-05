'use strict';

angular.module('loader')
    .config(function configureStates($logProvider, $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/loader');

        $stateProvider
            .state('loader', {
                url: '/loader',
                controller: 'loadersCtrl',
                templateUrl: 'views/loaders.html',
            });
    });