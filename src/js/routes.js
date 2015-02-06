'use strict';

angular.module('loader')
    .config(function configureStates($logProvider, $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/loader/hourglass');
        $urlRouterProvider.when('/', ['$match', function($match) {
        	return '/loader/hourglass';
    	}]);
    	$urlRouterProvider.when('/loader', ['$match', function($match) {
        	return '/loader/hourglass';
    	}]);

        $stateProvider
            .state('loader', {
                url: '/loader',
                template: '<div ui-view="container"></div>',
                resolve: {
                	loaders: ['$http', function($http){
                		return $http.get("./src/scss/loader.scss")
							.then(function(response){
					            var regex = /(?:\.#\{\$loader-prefix\}-)((\w+-*)*)(?:\s\{)/gi;
					            var loaders = [];
					            var className;
					            while(className = regex.exec(response.data)){
					                loaders.push({
					                	name:className[1],
					                	title: className[1].replace("-", " "),
					                	active: false
					                });
					            }
					            return loaders;
					        });
                	}]
                }
            })
            .state('loader.id', {
            	url:'/:id',
            	views:{
	            	container:{
	            		controller: 'loadersCtrl',
	                	templateUrl: 'views/loaders.html',
	                }
            	},
            	resolve: {
            		activeLoader: ['$stateParams', function($stateParams){
            			console.log("Here", $stateParams.id);
            			return $stateParams.id;
            		}]
            	}
            })
    });