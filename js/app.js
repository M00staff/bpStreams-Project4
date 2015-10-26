var app = angular.module('bpStreams', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/views/homePartial.html'
      })

      .state('home.year', {
        url: '/:year',
        templateUrl: '/views/yearPartial.html',
        //controller: 'showController'
      })

})
