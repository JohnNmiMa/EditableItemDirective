angular.module('editDirective', [])

.controller('editDirectiveCtrl', ['$scope',
                function($scope) {
    $scope.btnMode = "Edit";

    $scope.toggleEdit = function() {
        if ($scope.btnMode == "Edit") {
            $scope.btnMode = "Save";
        } else {
            $scope.btnMode = "Edit";
        }
    }
}])

.directive('editItem', function() {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
        }
    }
});