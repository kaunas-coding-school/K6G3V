app.controller('myCtrl', function ($scope) {
    $scope.vardas = "Raimondas";
    $scope.zinute = "Geras bajeris";
    $scope.vardas = "Vardenis";
    $scope.zinute = "zinute";

    $scope.keisti = function () {
        $scope.vardas = 'Kitas vardas';
    };
    $scope.masyvas = [
        {
            'pavadinimas': 'Pav pavadinimas1',
            'adresas': 'https://scontent.fvno1-1.fna.fbcdn.net/v/t1.0-9/14449061_10209280687047342_14529563727372055_n.jpg?oh=d9f16fb765f750bf5696f394c28391e4&oe=59154F08'
        },
        {
            'pavadinimas': 'Pav pavadinimas2',
            'adresas': 'https://scontent.fvno1-1.fna.fbcdn.net/v/t1.0-9/14449061_10209280687047342_14529563727372055_n.jpg?oh=d9f16fb765f750bf5696f394c28391e4&oe=59154F08'
        },
        {
            'pavadinimas': 'Pav pavadinimas3',
            'adresas': 'https://scontent.fvno1-1.fna.fbcdn.net/v/t1.0-9/14449061_10209280687047342_14529563727372055_n.jpg?oh=d9f16fb765f750bf5696f394c28391e4&oe=59154F08'
        },
        {
            'pavadinimas': 'Pav pavadinimas4',
            'adresas': 'https://scontent.fvno1-1.fna.fbcdn.net/v/t1.0-9/14449061_10209280687047342_14529563727372055_n.jpg?oh=d9f16fb765f750bf5696f394c28391e4&oe=59154F08'
        },
        {
            'pavadinimas': 'Pav pavadinimas5',
            'adresas': 'https://scontent.fvno1-1.fna.fbcdn.net/v/t1.0-9/14449061_10209280687047342_14529563727372055_n.jpg?oh=d9f16fb765f750bf5696f394c28391e4&oe=59154F08'
        },
        {
            'pavadinimas': 'Pav pavadinimas6',
            'adresas': 'https://scontent.fvno1-1.fna.fbcdn.net/v/t1.0-9/14449061_10209280687047342_14529563727372055_n.jpg?oh=d9f16fb765f750bf5696f394c28391e4&oe=59154F08'
        }
    ];
});









