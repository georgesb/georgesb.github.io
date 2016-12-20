var app = angular.module('myApp', []);

var url = "./js/sonnets.json";

app.controller('myController', function($scope, $http) {

 $scope.goCats = false;

  $http.get(url)
       .then(function(response){
          $scope.items = response.data;                
        });
});

/*

 	http://poetrydb.org/author,title/Shakespeare;Sonnet 

 	http://poetrydb.org/author/Shakespeare/title,lines

 	./js/sonnets.json

*/

