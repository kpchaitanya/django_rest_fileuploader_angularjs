var myApp = angular.module('fileuploadFrontendApp', ['ngResource']);

myApp.config(function($resourceProvider){
    $resourceProvider.defaults.stripTrailingSlashes = false;
});

myApp.controller('MainCtrl', function($scope, Files){
    console.log('In main control');

    $scope.files = Files.query();
});