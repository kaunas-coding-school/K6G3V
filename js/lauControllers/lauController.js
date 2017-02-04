app.controller ('myCtrl', function ($scope) {
    $scope.vardas = "Vardas";
    $scope.zinute = "mano zinute";

    $scope.keisti = function () {
        $scope.vardas = 'Send';

    };


});

app.controller ('formaController', function () {
    var vm = this;

});
