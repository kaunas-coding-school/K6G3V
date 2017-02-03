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
    $scope.maasyvas={'pavadinimas':'Pav pavadinimas','adresas':'https://scontent.fvno1-1.fna.fbcdn.net/v/t1.0-1/c27.0.160.160/p160x160/16472826_1124575140998654_8410973630367901586_n.jpg?oh=582480a7a40a1b2bc3c96e9674446dc4&oe=593FA565'},
        {'pavadinimas':'Pav pavadinimas1','adresas':'https://scontent.fvno1-1.fna.fbcdn.net/v/t1.0-1/c27.0.160.160/p160x160/16472826_1124575140998654_8410973630367901586_n.jpg?oh=582480a7a40a1b2bc3c96e9674446dc4&oe=593FA565'},
        {'pavadinimas':'Pav pavadinimas2','adresas':'https://scontent.fvno1-1.fna.fbcdn.net/v/t1.0-1/c27.0.160.160/p160x160/16472826_1124575140998654_8410973630367901586_n.jpg?oh=582480a7a40a1b2bc3c96e9674446dc4&oe=593FA565'},
        {'pavadinimas':'Pav pavadinimas3','adresas':'https://scontent.fvno1-1.fna.fbcdn.net/v/t1.0-1/c27.0.160.160/p160x160/16472826_1124575140998654_8410973630367901586_n.jpg?oh=582480a7a40a1b2bc3c96e9674446dc4&oe=593FA565'};


});
