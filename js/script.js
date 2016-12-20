var app = angular.module('myApp', []);

app.controller('myController', function($scope, $http) {

    var url;
    var id;

    $scope.init = function(id) {
        $scope.id = id;
        url = "http://poetrydb.org/author/" + $scope.id + "/title,lines";
        $http.get(url).then(function(response) {
            $scope.items = response.data;
        });
    };

    $scope.getID = function(){
    	return $scope.id;
    }


});

