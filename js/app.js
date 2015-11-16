var app = angular.module('bpStreams', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/views/homePartial.html',
        controller: 'showController'
      })

      .state('home.year1', {
        controller: function ($scope) {
          $scope.pickYear(2001);
        },
        url: '2001',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year2', {
        controller: function ($scope) {
          $scope.pickYear(2002);
        },
        url: '2002',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year3', {
        controller: function ($scope) {
          $scope.pickYear(2003);
          console.log("anything");
        },
        url: '2003',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year4', {
        controller: function ($scope) {
          $scope.pickYear(2004);
          console.log("anything");
        },
        url: '2004',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year5', {
        controller: function ($scope) {
          $scope.pickYear(2005);
          console.log("anything");
        },
        url: '2005',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year6', {
        controller: function ($scope) {
          $scope.pickYear(2006);
          console.log("anything");
        },
        url: '2006',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year7', {
        controller: function ($scope) {
          $scope.pickYear(2007);
          console.log("anything");
        },
        url: '2007',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year8', {
        controller: function ($scope) {
          $scope.pickYear(2008);
          console.log("anything");
        },
        url: '2008',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year9', {
        controller: function ($scope) {
          $scope.pickYear(2009);
          console.log("anything");
        },
        url: '2009',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year10', {
        controller: function ($scope) {
          $scope.pickYear(2010);
          console.log("anything");
        },
        url: '2010',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year11', {
        controller: function ($scope) {
          $scope.pickYear(2011);
          console.log("anything");
        },
        url: '2011',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year12', {
        controller: function ($scope) {
          $scope.pickYear(2012);
          console.log("anything");
        },
        url: '2012',
        templateUrl: '/views/showsPartial.html'
      })

      .state('home.year13', {
        controller: function ($scope) {
          $scope.pickYear(2013);
          console.log("anything");
        },
        url: '2013',
        templateUrl: '/views/showsPartial.html'
      })

})
