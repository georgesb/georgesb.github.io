var app = angular.module('myApp', []);


app.controller('myController', function($scope, $http) {

var url;
var id;


  $scope.toggle = true;
  $scope.play = false;
  $scope.show = function() {
       $scope.toggle = true;
  	   $scope.play = false;
  }
  $scope.hide = function() {
	   $scope.play = true;
       $scope.toggle = false;
  }

    $scope.init = function(id) {
        $scope.id = id;
        url =  "./js/" + $scope.id;
        $http.get(url).then(function(response) {
            $scope.items = response.data;
        });
    };
});

/* summerdream.json */