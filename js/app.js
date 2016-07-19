var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: 'views/home.html',
      controller: 'RegistrationController'
    }).
     when('/about', {
      templateUrl: 'views/about.html',
      controller: 'SuccessController'
    }).
    when('/portfolio', {
      templateUrl: 'views/portfolio.html',
      controller: 'RegistrationController'
    }).
    when('/contacts', {
      templateUrl: 'views/contacts.html',
      controller: 'MapController'
    }).
    otherwise({
      redirectTo: '/home'
    });
}]);