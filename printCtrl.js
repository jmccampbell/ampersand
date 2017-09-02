angular
  .module("app", [])
  .controller("printCtrl", function($scope){
    $scope.currentDiv = ""

    $scope.onload = function(){
      $scope.currentDiv = "falconstorSolBroch"
    }

    $scope.isCurrent = function(divName){
      return divName === $scope.currentDiv
    }

    $scope.changeDiv = function(divName) {
      $scope.currentDiv = divName;
      console.log($scope.currentDiv);
    }
  });
