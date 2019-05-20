app.factory("myFactory", function ($http, $q) {
    var objectFn={};
    objectFn.getExcelData=function(){
        var defered = $q.defer();
        $http.get('/getExcel').then(success, fail);

        function success(data) {
            defered.resolve(data);
        }

        function fail(error) {
            defered.reject(error);
        }    
        return defered.promise;
    
}
return objectFn;

})