var app = angular.module('myApp', ['ngAnimate','ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "/K6G3V/index.htm"
        })
        .when("/tautvydas", {
            templateUrl : "/K6G3V/kolegos/tautiz.html"
        })
        .when("/kami", {
            templateUrl : "/K6G3V/kolegos/Kami.html"
        })
});