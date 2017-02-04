var app = angular.module('myApp', ['ngAnimate','ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "/K6G3V/index.htm"
        })
        .when("/tautvydas", {
            templateUrl : "/K6G3V/kolegos/tautiz.html"
        })
        .when("/Laurynas_Gauronskis", {
            templateUrl : "/K6G3V/kolegos/Laurynas%20Gauronskis.html"
        })
        .when("/raimondas", {
            templateUrl: "/kolegos/raimondas.html"
        })
        .when("/kami", {
            templateUrl : "/K6G3V/kolegos/Kami.html"
        })
        .when("/Jonas",{
            templateUrl:"K6G3V/kolegos/JonasP.html"
        })
        .when("/ignas", {
            templateUrl : "/K6G3V/kolegos/Ignas.html"
        })
});