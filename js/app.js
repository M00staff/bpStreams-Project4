var app = angular.module('bpStreams', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/views/homePartial.html',
        controller: 'showController'
      })

      // .state('home.yearDizzle', {
      //   url: ':yearId',
      //   controller: function($http, $scope) {
      //     //first get request
      //     $scope.pickYear = function(year) {
      //     $http.jsonp('https://archive.org/advancedsearch.php?q=BrothersPast,%20year:' +year+ '&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=600&page=1&output=json&callback=JSON_CALLBACK')
      //
      //     .then(function(data) {
      //       $scope.shows = data.data.response.docs;
      //       $scope.year = year;
      //       });
      //     }
      //   },
      //   templateUrl: '/views/showsPartial.html'
      // })

      .state('home.year2', {
        controller: function ($scope) {
          $scope.pickYear(2002);
          console.log("anything");
        },
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
