'use strict';

angular.module('loader')
	.controller('loadersCtrl', function($scope, loaders, activeLoader, $state){
		$scope.loaders = loaders;
		_.each($scope.loaders, function(loader){
			if (loader.name == $state.params.id) {
				loader.active = true;
			} else {
				loader.active = false;
			}
		});
		console.log("activeLoader", activeLoader);
		$scope.activeLoader = _.find($scope.loaders, {
			name: activeLoader
		}) || $scope.loaders[0];
	});