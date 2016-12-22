var app = angular.module('myApp', []);

var url = "./js/summerdream.json";

app.controller('myController', function($scope, $http) {
  $http.get(url)
       .then(function(response){
          $scope.items = response.data;                
        });
});

