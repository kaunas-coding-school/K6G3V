var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.vardas = "Raimondas";
    $scope.zinute = "Geras bajeris";
});
app.controller('testCtrl', function ($Scope) {
    $Scope.vardas = "Varedenis";
    $Scope.zinute = "zinute";

    $Scope.keisti = function(){
        $Scope.vardas = 'Kitas vardas';
    }
})