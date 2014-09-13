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
            // Get access to the button, so we can bind a click handler 'on' it
            var button = element.find('button.btn');
            $scope.btnText = "Edit";

            button.on('click', function() {
                $scope.$apply(function() {
                    toggleEdit();
                })
            });

            toggleEdit = function() {
                $scope.btnText = ($scope.btnText == "Edit") ? "Save" : "Edit";
            };
        }
    }
});