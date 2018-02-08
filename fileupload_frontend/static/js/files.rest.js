function transformFileRequest(data) {
    if (data === undefined)
        return data;

    var fd = new FormData();
    angular.forEach(data, function (value, key) {
        if (value instanceof FileList) {
            if (value.length == 1) {
                fd.append(key, value[0]);
            } else {
                angular.forEach(value, function (file, index) {
                    fd.append(key + '_' + index, file);
                });
            }
        } else {
            fd.append(key, value);
        }
    });

    return fd;
}

myApp.factory('Files', function ($resource) {
    return $resource("/api/files/:pk/", {'pk': '@pk'}, {
        'save': {
            'method': 'POST',
            'transformRequest': transformFileRequest,
            'headers': {'Content-Type': undefined}
        }
    });
});