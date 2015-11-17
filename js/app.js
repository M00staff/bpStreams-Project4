var app = angular.module('bpStreams', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/views/homePartial.html',
        controller: 'showController'
      })


      // .state('home.year', {
      //   controller: function($scope) {
      //     $scope.pickYear(2001, 15);
      //   },
      //   url: ':yearURL',
      //   templateUrl: '/views/showsPartial.html'
      // })


      .state('home.2001', {
        controller: function ($scope) {
          $scope.pickYear(2001, 15);
        },
        url: '2001',
        templateUrl: '/views/showsPartial.html'
      })

                .state('home.2001.show', {
                  controller: 'songController',
                  url: '/:showId2',
                  templateUrl: '/views/showsPartial.html'
                })

      .state('home.2002', {
        controller: function ($scope) {
          $scope.pickYear(2002, 26);
        },
        url: '2002',
        templateUrl: '/views/showsPartial.html'
      })

                .state('home.2002.show', {
                  controller: 'songController',
                  url: '/:showId2',
                  templateUrl: '/views/showsPartial.html'
                })

      .state('home.2003', {
        controller: function ($scope) {
          $scope.pickYear(2003, 84);
        },
        url: '2003',
        templateUrl: '/views/showsPartial.html'
      })


                      .state('home.2003.show', {
                        controller: 'songController',
                        url: '/:showId2',
                        templateUrl: '/views/showsPartial.html'
                      })

      .state('home.2004', {
        controller: function ($scope) {
          $scope.pickYear(2004, 96);
        },
        url: '2004',
        templateUrl: '/views/showsPartial.html'
      })


                      .state('home.2004.show', {
                        controller: 'songController',
                        url: '/:showId2',
                        templateUrl: '/views/showsPartial.html'
                      })

      .state('home.2005', {
        controller: function ($scope) {
          $scope.pickYear(2005, 131);
        },
        url: '2005',
        templateUrl: '/views/showsPartial.html'
      })


                      .state('home.2005.show', {
                        controller: 'songController',
                        url: '/:showId2',
                        templateUrl: '/views/showsPartial.html'
                      })

      .state('home.2006', {
        controller: function ($scope) {
          $scope.pickYear(2006, 84);
        },
        url: '2006',
        templateUrl: '/views/showsPartial.html'
      })


                      .state('home.2006.show', {
                        controller: 'songController',
                        url: '/:showId2',
                        templateUrl: '/views/showsPartial.html'
                      })

      .state('home.2007', {
        controller: function ($scope) {
          $scope.pickYear(2007, 25);
        },
        url: '2007',
        templateUrl: '/views/showsPartial.html'
      })

                      .state('home.2007.show', {
                        controller: 'songController',
                        url: '/:showId2',
                        templateUrl: '/views/showsPartial.html'
                      })

      .state('home.2008', {
        controller: function ($scope) {
          $scope.pickYear(2008, 4);
        },
        url: '2008',
        templateUrl: '/views/showsPartial.html'
      })


                      .state('home.2008.show', {
                        controller: 'songController',
                        url: '/:showId2',
                        templateUrl: '/views/showsPartial.html'
                      })

      .state('home.2009', {
        controller: function ($scope) {
          $scope.pickYear(2009, 17);
        },
        url: '2009',
        templateUrl: '/views/showsPartial.html'
      })


                      .state('home.2009.show', {
                        controller: 'songController',
                        url: '/:showId2',
                        templateUrl: '/views/showsPartial.html'
                      })

      .state('home.2010', {
        controller: function ($scope) {
          $scope.pickYear(2010, 20);
        },
        url: '2010',
        templateUrl: '/views/showsPartial.html'
      })


                      .state('home.2010.show', {
                        controller: 'songController',
                        url: '/:showId2',
                        templateUrl: '/views/showsPartial.html'
                      })

      .state('home.2011', {
        controller: function ($scope) {
          $scope.pickYear(2011, 34);
        },
        url: '2011',
        templateUrl: '/views/showsPartial.html'
      })


                      .state('home.2011.show', {
                        controller: 'songController',
                        url: '/:showId2',
                        templateUrl: '/views/showsPartial.html'
                      })

      .state('home.2012', {
        controller: function ($scope) {
          $scope.pickYear(2012, 14);
        },
        url: '2012',
        templateUrl: '/views/showsPartial.html'
      })


                      .state('home.2012.show', {
                        controller: 'songController',
                        url: '/:showId2',
                        templateUrl: '/views/showsPartial.html'
                      })

      .state('home.2013', {
        controller: function ($scope) {
          $scope.pickYear(2013, 1);
        },
        url: '2013',
        templateUrl: '/views/showsPartial.html'
      })


                      .state('home.2013.show', {
                        controller: 'songController',
                        url: '/:showId2',
                        templateUrl: '/views/showsPartial.html'
                      })

})
