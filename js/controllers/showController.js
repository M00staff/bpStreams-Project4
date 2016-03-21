
app.controller('showController', ['$scope', 'showFactory', function( $scope, showFactory ) {
    $scope.pickYear = function ( year, row ) {
      showFactory.showYear( year, row )
      .then(function(data) {
        $scope.shows = data.data.response.docs;
      });
    }
} ]);

app.controller('songController', ['$scope', 'songFactory', function($scope, songFactory) {
    $scope.go = function() {
      songFactory.showPick(this.show.identifier)
      .then(function(response) {
        $scope.songs = response;
      })
    }
} ]);

app.controller('getSongCtrl', ['$scope', 'playFactory', function($scope, playFactory) {
  $scope.playSong = function(title, file, d1, dir, songList, index) {
    playFactory.songPick(title, file, d1, dir, songList, index)
  }
} ]);
