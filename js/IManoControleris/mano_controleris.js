
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

    $scope.masyvas=[
        {'pavadinimas':'pav pavadinimas 1 ', 'adresas':'http://domenas.lt/img/paveikslelis1.jpg'},
        {'pavadinimas':'pav pavadinimas 2', 'adresas':'http://domenas.lt/img/paveikslelis2.jpg'},
        {'pavadinimas':'pav pavadinimas 3', 'adresas':'http://domenas.lt/img/paveikslelis3.jpg'},
        {'pavadinimas':'pav pavadinimas 4', 'adresas':'http://domenas.lt/img/paveikslelis4.jpg'}
    ];

});
