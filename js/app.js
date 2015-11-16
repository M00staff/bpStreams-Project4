var app = angular.module('bpStreams', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/views/homePartial.html'
      })

      .state('home.yearDizzle', {
        url: 'party/:yearId',
        controller: function($scope, $stateParams) {
          $scope.id = $stateParams.yearId;
        },
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year2', {
        url: '2002',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year3', {
        url: '2003',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year4', {
        url: '2004',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year5', {
        url: '2005',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year6', {
        url: '2006',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year7', {
        url: '2007',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year8', {
        url: '2008',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year9', {
        url: '2009',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year10', {
        url: '2010',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year11', {
        url: '2011',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year12', {
        url: '2012',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year13', {
        url: '2013',
        templateUrl: '/views/showsPartial.html'
      })

})
