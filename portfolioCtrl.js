angular
  .module("app", [])
  .controller("printCtrl", function($scope){
    $scope.currentDiv = ""

    $scope.onload = function(page){
      switch(page){
        case "print":
          $scope.currentDiv = "falconstorSolBroch"
          break

        case "brand":
          $scope.currentDiv = "healthbreakProgramLogos"
          break

        case "digital":
          $scope.currentDiv = "healthbreakWebsite"
          break

        case "large":
          break

        case "tech":
          break
      }
    }

    $scope.isCurrent = function(divName){
      return divName === $scope.currentDiv
    }

    $scope.changeDiv = function(divName) {
      $scope.currentDiv = divName;
      console.log($scope.currentDiv);
    }
  });
