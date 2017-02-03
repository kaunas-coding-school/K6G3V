var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

    $scope.vardas= "Vardas";
    $scope.zinute = "Zinute";

});

app.controller('testCtrl', function ($scope) {

    $scope.vardas = 'Vardenis';
    $scope.zinute = 'Zinutesss';

    $scope.keisti = function () {
        $scope.vardas = 'Kitas vardas';

    }
});