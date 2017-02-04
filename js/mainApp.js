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
            templateUrl: "/kolegos/profiliai/raimondas.html"
        })
        .when("/kami", {
            templateUrl : "/kolegos/profiliai/Kami.html"
        })
        .when("/Jonas",{
            templateUrl:"/kolegos/profiliai/JonasP.html"
        })
        .when("/ignas", {
            templateUrl : "/kolegos/profiliai/Ignas.html"
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});