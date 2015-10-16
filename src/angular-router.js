myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    }).
    when('/users', {
      templateUrl: 'partials/users.html',
      controller: 'UsersCtrl'
    }).
    when('/users/:userId', {
      templateUrl: 'partials/user-detail.html',
      controller: 'UserDetailCtrl'
    }).
    otherwise({
      redirectTo: '/home'
    });
}]);