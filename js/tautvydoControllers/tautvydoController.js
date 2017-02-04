app.controller('myCtrl', function($scope) {

    // $scope.vardas = "Tautvydas";
    // $scope.zinute = "Mano grazi zinute";

});

app.controller('testCtrl', function($scope){

    $scope.vardas = "Vardenis";
    $scope.zinute = "Vardenio grazi zinute";

    $scope.keisti = function() {
        $scope.vardas = 'Kitas vardas ';
    };

    $scope.masyvas = [
        {'pavadinimas':'Pav pavadinimas 1', 'adresas':'http://domernas.lt/img/paveikslelis1.jpg'},
        {'pavadinimas':'Pav pavadinimas 2', 'adresas':'http://domernas.lt/img/paveikslelis2.jpg'},
        {'pavadinimas':'Pav pavadinimas 3', 'adresas':'http://domernas.lt/img/paveikslelis3.jpg'},
        {'pavadinimas':'Pav pavadinimas 4', 'adresas':'http://domernas.lt/img/paveikslelis4.jpg'},
        {'pavadinimas':'Pav pavadinimas 5', 'adresas':'http://domernas.lt/img/paveikslelis5.jpg'},
        {'pavadinimas':'Pav pavadinimas 5', 'adresas':'http://domernas.lt/img/paveikslelis5.jpg'}
    ];

});
