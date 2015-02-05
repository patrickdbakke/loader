'use strict';

angular.module('loader')
	.controller('loadersCtrl', function($scope){
		$scope.loaders = [
			'content',
			'dots',
			'hourglass',
			'revolve',
			'rubix-open',
			'rubix',
			'spiral',
			'thin-bar',
			'wave',
		];
		$scope.selectLoader = function(loader){	
			console.log("here");	
			$scope.activeLoader = loader;
		};
		$scope.selectLoader('hourglass');
	});