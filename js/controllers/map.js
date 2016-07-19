// myApp.controller('MapController', ['$scope', function($scope) {

  
// }]);

angular.module('ui.filters', []);
angular.module('ui.directives', []);
angular.module('ui', [
  'ui.filters', 
  'ui.directives'
]).value('ui.config', {});

angular.module('ui.directives', []).directive('googleMap', function () {
    return {
      template: '<iframe width="100%" height="350" frameborder="0" style="border:0"></iframe>',
      restrict: 'E',
      scope: {
        pbcode: '='
      },
      link: function postLink(scope, element) {
        var mapFrame = element.find("iframe");
          if (scope.pbcode) {
            mapFrame.attr('src', "https://www.google.com/maps/embed?pb=" + scope.pbcode);
          }
          else {
            mapFrame.attr('src', '');
          }
      }
    };
  });

angular.module('myApp', ['ui.directives']);