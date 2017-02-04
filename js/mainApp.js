var app = angular.module('myApp', ['ngAnimate','ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "/antras_puslapis.html"
        })
        .when("/tautvydas", {
            templateUrl : "/kolegos/tautiz.html"
        })
        .when("/Laurynas_Gauronskis", {
            templateUrl : "/kolegos/Laurynas%20Gauronskis.html"
        })
        .when("/raimondas", {
            templateUrl: "/kolegos/raimondas.html"
        })
        .when("/kami", {
            templateUrl : "/K6G3V/kolegos/Kami.html"
        })
        .when("/Jonas",{
            templateUrl:"/kolegos/JonasP.html"
        })
        .when("/ignas", {
            templateUrl : "/K6G3V/kolegos/Ignas.html"
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});