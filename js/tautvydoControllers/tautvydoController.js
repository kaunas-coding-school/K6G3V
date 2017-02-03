var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

    $scope.vardas = "Tautvydas";
    $scope.zinute = "Mano grazi zinute";

});

app.controller('testCtrl', function($scope){

    $scope.vardas = "Vardenis";
    $scope.zinute = "Vardenio grazi zinute";

    $scope.keisti = function() {
        $scope.vardas = 'Kitas vardas ';
    }

});
