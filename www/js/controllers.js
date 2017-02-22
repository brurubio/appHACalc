angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state, $ionicPopup) {})

.controller('HomeCtrl', function($scope, $state, $ionicPopup) {
//redirect to IMC Calculate
  $scope.IMCredirect = function () {
    $state.go("IMCalc");
  };

})
.controller('IMCalcCtrl', function($scope, $state, $ionicHistory, $ionicPopup) {

  //Hide the result content
  document.getElementById("hide").style.display = "none";

  //initialize the var
  $scope.imc = {};

  //define Select default Value
  $scope.imc.select = "Selecione";

  //header back button
  $scope.goBack = function () {
    $ionicHistory.goBack();
  };

  //calculate IMC and Show result
  $scope.CalculateIMC = function (selected) {
    document.getElementById("hide").style.display = "inline";
    console.log($scope.imc);
  };

});
