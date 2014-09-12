angular.module('editDirective', [])

.controller('editDirectiveCtrl', ['$scope',
                function($scope) {
}])

.directive('makeEditable', function() {
    return {
        restrict: 'A',
        transclude: true,
        templateUrl: 'make-editable-template.html',
        replace: false,
        link: function($scope, element, attrs) {
            // Get access to the button, so we can bind a click handler to it
            var button = element.find('button.btn');
            $scope.btnText = "Edit";

            button.on('click', function() {
                $scope.$apply(function() {
                    console.log("The make-editable directive got a click!")
                    toggleEdit();
                })
            });

            toggleEdit = function() {
                if ($scope.btnText == "Edit") {
                    $scope.btnText = "Save";
                } else {
                    $scope.btnText = "Edit";
                }
            };
        }
    }
});