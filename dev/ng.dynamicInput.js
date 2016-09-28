// dynamic input
app.directive('dynamicInput', ['$compile', function ($compile) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      // component id
      var inputId = attrs.inputId;

      // component model
      var inputModel = attrs.inputModel || scope[inputId].inputModel;

      // source model
      var sourceModel = scope[inputId].sourceModel;

      // input style
      var inputStyle = attrs.inputStyle || scope[inputId].inputStyle || '';

      // label style
      var labelStyle = attrs.labelStyle || scope[inputId].labelStyle || '';

      // wrapper style
      var wrapperStyle = attrs.wrapperStyle || scope[inputId].wrapperStyle || '';

      // template
      var template = '';

      // check input id, component model, source model
      if (inputId && inputModel && sourceModel) {

        // create inputId object if not exists
        scope[inputId] = scope[inputId] || {};

        // set template
        angular.forEach(sourceModel, function (value, key) {
          if (value) {
            template = template +
              '<div class="' + wrapperStyle + '">'+
              '<label class="' + labelStyle + '">' + key + '</label>' +
              '<input type="text" class="' + inputStyle + '" ' +
              'data-ng-model="' + inputModel + '.' + key + '" >' +
              '</div>';
          }
        });

        element.html('').append($compile(template)(scope));
      } else {
        console.error('must set inputId && inputModel && sourceModel');
      }

    }
  };
}]);
