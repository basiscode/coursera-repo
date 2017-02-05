(function(){
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    $scope.lunchMenu = "";
    $scope.lunchMessage = "";

    $scope.checkLunch = function() {

      var separator = ',';
      var arrayOfStrings = $scope.lunchMenu.split(separator);
      var lunchCount = arrayOfStrings.length;

      if ($scope.lunchMenu == "") {
        $scope.lunchMessage = "Please enter data first";
      } else if (lunchCount <= 3) {
        $scope.lunchMessage = "Enjoy!";
      } else {
        $scope.lunchMessage = "Too much!";
      }
    }



  }
})();
