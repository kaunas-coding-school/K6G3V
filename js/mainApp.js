var app = angular.module('myApp', ['ngAnimate','ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "/antras_puslapis.html"
        })
        .when("/tautvydas", {
            templateUrl : "/kolegos/profiliai/tautiz.html"
        })
        .when("/Laurynas_Gauronskis", {
            templateUrl : "/kolegos/profiliai/Laurynas.html"
        })
        .when("/raimondas", {
            templateUrl: "/kolegos/raimondas.html"
        })
        .when("/kami", {
            templateUrl : "/kolegos/Kami.html"
        })
        .when("/Jonas",{
            templateUrl:"/kolegos/JonasP.html"
        })
        .when("/ignas", {
            templateUrl : "/kolegos/Ignas.html"
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});