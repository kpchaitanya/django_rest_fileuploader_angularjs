myApp.factory('Files', function ($resource) {
    return $resource("/api/files/:pk/", {'pk': '@pk'});
});