(function() {
    'use strict';

    angular.module('LunchCheck', [])
           .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {
        $scope.input = "";
        $scope.message = "";

        $scope.display = function() {

            var array = $scope.input.split(',');
            var strlen = $scope.input.length;
            var noOfItems = array.length

            if( strlen > 0 )
            {
              if( noOfItems < 4 )
              {
                $scope.message = "Enjoy!";
              }
              else
              {
                  $scope.message = "Too much!";
              }
            }
            else {
              $scope.message = "Please enter data first";
            }

        };
    }
})();
