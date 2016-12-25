var app = angular.module('myApp', []);


app.controller('myController', function($scope, $http) {

var url;
var id;
  $scope.loading = true;


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
		$scope.items = '';
        url =  "./js/" + $scope.id;
        $http.get(url).then(function(response) {
            $scope.items = response.data;
			$scope.loading = false;
        });
    };
});

app.filter('remove', function() {
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                if(c == '[' || c == ']') c ='';
            }
            txt += c;
        }
        return txt;
    };
});
