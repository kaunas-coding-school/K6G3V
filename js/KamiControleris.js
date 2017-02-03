app.controller('myCtrl', function($scope) {

    $scope.vardas = "Kami";
    $scope.zinute = "Mano grazi zinute";

});

app.controller('testCtrl', function($scope){

    $scope.vardas = "Vardenis";
    $scope.zinute = "Vardenio grazi zinute";

    $scope.keisti = function() {
        $scope.vardas = 'Kitas vardas ';
    };
    $scope.masyvas = [
        {'pavadinimas': 'Pav pavadinimas 1', 'adresas':'http://domenas.lt/img/paveikslelis.jpg'},
        {'pavadinimas': 'Pav pavadinimas 2', 'adresas':'http://domenas.lt/img/paveikslelis1.jpg'},
        {'pavadinimas': 'Pav pavadinimas 3', 'adresas':'http://domenas.lt/img/paveikslelis2.jpg'},
        {'pavadinimas': 'Pav pavadinimas 4', 'adresas':'http://domenas.lt/img/paveikslelis3.jpg'}
    ];

});

