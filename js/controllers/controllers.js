(function(){
  angular
    .module("bpStreams")
    .controller('showController', ['showFactory', function( showFactory ) {
      var vm = this;
        this.pickYear = function ( year, row ) {
          showFactory.showYear( year, row )
          .then(function(data) {
            vm.shows = data.data.response.docs;
          });
        }
    } ]);
}());

(function(){
  angular
    .module("bpStreams")
    .controller('songController', ['songFactory', function( songFactory ) {
      var vm = this;
        this.go = function(showID) {
          songFactory.showPick(showID)
          .then(function(response) {
            vm.songs = response;
          })
        }
    } ]);
}());

(function(){
  angular
    .module("bpStreams")
    .controller('getSongCtrl', ['playFactory', function( playFactory ) {
      this.playSong = function(title, file, d1, dir, songList, index) {
        playFactory.songPick(title, file, d1, dir, songList, index)
      }
    } ]);
}());
