var app = angular.module('myApp', []);

var url = "./js/sonnets.json";

app.controller('myController', function($scope, $http) {

   $scope.goCats = false;

   $scope.getCats = function(){
		if($scope.goCats==true)
    	return "visibility_off";
		else return "visibility";
    }

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

