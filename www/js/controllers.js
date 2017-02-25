angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state, $ionicPopup) {})

.controller('HomeCtrl', function($scope, $state, $ionicPopup) {
//redirect to IMC Calculate
  $scope.IMCredirect = function () {
    $state.go("IMCalc");
  };

})
.controller('IMCalcCtrl', function($scope, $state, $ionicHistory, $ionicPopup, $ionicScrollDelegate) {

  //Hide the result content
  document.getElementById("hide").style.display = "none";

  //initialize the var
  $scope.imc = {};

  //define Select default Value
  $scope.imc.sexSelect = "";
  $scope.imc.idadeSelect = "";

  //header back button
  $scope.goBack = function () {
    $ionicHistory.goBack();
  };

  FixFloat = function(number) {
    number = number.replace("," , ".");
    return parseFloat(number);
  };

  //calculate IMC and Show result
  $scope.CalculateIMC = function () {
    if ($scope.imc.sexSelect === ""){
        var alertSexPopup = $ionicPopup.alert({
            title: 'Erro',
            template: 'Selecione o sexo!'
        });
    }  else {
        var calcimc = FixFloat($scope.imc.peso)/(FixFloat($scope.imc.alt)*FixFloat($scope.imc.alt));
        $scope.result = parseFloat(calcimc).toFixed(2);
         // se é criança
         if ($scope.imc.idade <= "15") {
           //e é criança e menina
          if ($scope.imc.sexSelect == "1") {

            // if ($scope.imc.idade == "6"){
            //   if ($scope.result < 14.3) {
            //     $scope.result = $scope.result + " - Abaixo do Peso";
            //   } else if ($scope.result >= 14.3 && $scope.result <= 16.1) {
            //     $scope.result = $scope.result + " - Normal";
            //   } else if ($scope.result > 16.1 && $scope.result <= 17.4) {
            //     $scope.result = $scope.result + " - Sobrepeso";
            //   } else if ($scope.result > 17.4) {
            //     $scope.result = $scope.result + " - Obesidade";
            //   }
            // } else if ($scope.imc.idade == "7"){
            //   if ($scope.result < 14.9) {
            //     $scope.result = $scope.result + " - Abaixo do Peso";
            //   } else if ($scope.result >= 14.9 && $scope.result <= 17.1) {
            //     $scope.result = $scope.result + " - Normal";
            //   } else if ($scope.result > 17.1 && $scope.result <= 18.9) {
            //     $scope.result = $scope.result + " - Sobrepeso";
            //   } else if ($scope.result > 18.9) {
            //     $scope.result = $scope.result + " - Obesidade";
            //   }
            // } else if ($scope.imc.idade == "8"){
            //   if ($scope.result < 15.6) {
            //     $scope.result = $scope.result + " - Abaixo do Peso";
            //   } else if ($scope.result >= 15.6 && $scope.result <= 18.1) {
            //     $scope.result = $scope.result + " - Normal";
            //   } else if ($scope.result > 18.1 && $scope.result <= 20.3) {
            //     $scope.result = $scope.result + " - Sobrepeso";
            //   } else if ($scope.result > 20.3) {
            //     $scope.result = $scope.result + " - Obesidade";
            //   }
            // }

          } else { //se é criança e menino

          }
        } else { // se é adulto
          if ($scope.result <= 18.49) {
              $scope.result = $scope.result + " - Abaixo do Peso";
               document.getElementById("result-text").style.color = "#ffef03";
               $scope.xvalue = "125px";
            } else if ($scope.result >= 18.50 && $scope.result <= 24.99) {
              $scope.result = $scope.result + " - Normal";
              document.getElementById("result-text").style.color = "#50d524";
              $scope.xvalue = "190px";
            } else if ($scope.result >= 25 && $scope.result <= 29.99) {
              $scope.result = $scope.result + " - Sobrepeso";
              document.getElementById("result-text").style.color = "#ffef03";
              $scope.xvalue = "250px";
            } else if ($scope.result >= 30) {
              $scope.result = $scope.result + " - Obesidade";
              document.getElementById("result-text").style.color = "#ff3002";
              $scope.xvalue = "305px";
            }
         }
        document.getElementById("hide").style.display = "inline";
      }
    // document.getElementById("hide").style.display = "inline";
    // var calcimc = FixFloat($scope.imc.peso)/(FixFloat($scope.imc.alt)*FixFloat($scope.imc.alt));
    // $scope.result = parseFloat(calcimc).toFixed(2);
    // //document.getElementById("result").innerHTML = calcimc;
    // // if ($scope.imc.idadeSelect == "1") {
    // //   if ($scope.imc.sexSelect == "1") {
    // //
    // //   }
    // // } else {
    // //
    // // }
    // console.log($scope.imc);
  };

});
