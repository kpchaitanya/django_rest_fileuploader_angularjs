var myApp = angular.module('fileuploadFrontendApp', ['ngResource']);

myApp.config(function ($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
});

myApp.controller('MainCtrl', function ($scope, Files) {
    console.log('In main control');

    $scope.files = Files.query();

    $scope.newFile = {};

    $scope.deleteFile = function (file) {
        file.$delete(function (file) {
            $scope.files = Files.query();
        });
    };

    $scope.uploadFile = function () {
        console.log('w00t w00t! Upload file invoked!');
        Files.save($scope.newFile).$promise.then(
            function (response) {
                $scope.files.unshift(response);
            }
        );
    }

    $scope.setFile = function (element) {
        $scope.currentFile = element.files[0];
        var reader = new FileReader();

        reader.onload = function (event) {
            $scope.image_source = event.target.result;

            $scope.$apply();
        }
        // when the file is read it triggers the onload event above.
        reader.readAsDataURL(element.files[0]);
    }
});

myApp.directive('filesModel', filesModelDirective);