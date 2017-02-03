var app = angular.module('myApp', []);

app.controller ('myCtrl', function ($scope) {
    $scope.vardas = "Vardas";
    $scope.zinute = "mano zinute";

    $scope.keisti = function () {
        $scope.vardas = 'Send';

    }

});
