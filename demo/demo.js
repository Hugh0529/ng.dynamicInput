angular.module('demo', ['ng.treeView'])
  .controller('DemoController', ['$scope',
    function ($scope) {
      $scope.testInputModel = {};

      $scope.testSourceModel = {
        foo: true,
        bar: true
      };

      $scope.test = {
        // component model
        inputModel: 'testInputModel',

        // source model
        sourceModel: 'testSourceModel',

        // input style
        inputStyle: 'test-input',

        // label style
        labelStyle: 'test-label',

        // wrapper style
        wrapperStyle: 'test-wrapper'
      };
    }]);
