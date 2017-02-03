app.controller ('myCtrl', function ($scope) {
    $scope.vardas = "Vardas";
    $scope.zinute = "mano zinute";

    $scope.keisti = function () {
        $scope.vardas = 'Send';

    };

    $scope.masyvas = [
        {'pavadinimas':'Pav pavadinimas 1', 'nuoroda':'adreso nuoroda1'},
        {'pavadinimas':'Pav pavadinimas 2', 'nuoroda':'adreso nuoroda1'},
        {'pavadinimas':'Pav pavadinimas 3', 'nuoroda':'adreso nuoroda1'},
        {'pavadinimas':'Pav pavadinimas 4', 'nuoroda':'adreso nuoroda1'},
        {'pavadinimas':'Pav pavadinimas 5', 'nuoroda':'adreso nuoroda1'}
    ];

    $scope.menuMasyvas = [
        {'adresas':'/K6G3V/index.html','name':'Pirmas puslapis'},
        {'adresas':'/K6G3V/antras_puslapis.html','name':'Antras puslapis'},
        {'adresas':'/K6G3V/trecias_puslapis.html','name':'Trecias puslapis'},
        {'adresas':'Daumantas.html','name':'Daumantas'},
        {'adresas':'JonasP.html','name':'Jonas'},
        {'adresas':'Kami.html','name':'Kami'},
        {'adresas':'klarkas.html','name':'Klarkas'},
        {'adresas':'Laurynas%20Gauronskis.html','name':'Laurynas'},
        {'adresas':'raimondas.html','name':'Raimondas'},
        {'adresas':'tautiz.html','name':'Tautiz'},
        {'adresas':'Ignas.html','name':'Ignas'}

    ]



});
