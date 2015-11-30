app.directive('getSongD', function() {
  return {
    restrict: 'EA',
    controller: 'getSongCtrl',
    scope: {
      songSource: "=",
      //songs: "@"
      //songListFinal: "="
    },
    templateUrl: "views/songsPartial.html",
    // scope.$watch('songs', function(newValue) {
    //   console.log(newValue);
    // })
    link: function(scope) {
      //console.log("directive ran");

    }
  };
});
