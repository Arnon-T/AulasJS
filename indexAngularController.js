//angularController
var appIndex = angular.module("appTeste", []);

appIndex.controller("indexAngularController", 
function($scope) {
    
    $scope.nome = "Arnon";
    $scope.sobrenome= "Tillmann";

});