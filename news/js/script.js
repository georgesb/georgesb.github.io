var app = angular.module('myApp', []);

app.controller('myController', function($scope, $http) {
    var url;
    var key = '7d44e0e821d34ae1bd98bff9880d2bbe';
    var id;
    $scope.init = function(id) {
        $scope.id = id;
        url = "https://newsapi.org/v1/articles?source=" + $scope.id + "&apiKey=" + key;
        $http.get(url).success(function(response) {
            $scope.items = response.articles;
        });
        url= "https://newsapi.org/v1/sources?source=" + $scope.id + "&apiKey=" + key;
        $http.get(url).success(function(response) {
            $scope.sources = response.sources;
        });
    };
    $scope.getID = function(){
    	return $scope.id;
    }
});

