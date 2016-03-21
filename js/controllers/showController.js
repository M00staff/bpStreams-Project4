//dependency injection for AJAX calls
app.controller('showController', ['$scope', 'showFactory', function( $scope, showFactory ) {

    $scope.pickYear = function ( year, row ) {
      showFactory.showYear( year, row )
      .then(function(data) {
        $scope.shows = data.data.response.docs;
        console.log(data);
      });
    }
} ]);




app.controller('songController', ['$http', '$scope', function($http, $scope) {
    $scope.go = function getSongNow(showID) {
      $http.jsonp('https://archive.org/metadata/' + showID + '?callback=JSON_CALLBACK')
      .then(function(response) {
          var songList = [];
        $.each(response.data.files, function getSong(i, val) {           //iterate and add name and title to variables
          var fileName = val.name;
          var songName = val.title;
          var baseUrl = response.data.d1;
          var dir = response.data.dir;
          var ext = fileName.substr(fileName.lastIndexOf('.') + 1);   //check file type - looks at everything after '.'

            if ((ext === 'ogg' || ext === 'mp3') && songName != undefined) {
              songList.push({songTitle: songName, songFile: fileName, deeOne: baseUrl, directory: dir, songSource1: 'http://' + baseUrl + dir + '/' + fileName});
              $scope.songs = songList;

              //================================sorts playlist
              songList.sort(function (a, b) {
                if (a.songFile > b.songFile) {
                  return 1;
                }
                if (a.songFile < b.songFile) {
                  return -1;
                }
                return 0;
              })

            }
          })
        })
    }
} ])


app.controller('getSongCtrl', ['$http', '$scope', function($http, $scope) {
  $scope.playSong = function(title, file, d1, dir, songList, index) {
  var songSrc = {title: title, source: 'http://' + d1 + dir + '/' + file};


  $scope.songSource = songSrc;
  $('.player-song-title').html(songSrc.title);          //actual changing of audio source
  $('.player').attr('src', songList[index].songSource1);


                                //=========== event listener for next song
  var audio = $('audio');
  var songCount = index;
  var len = songList.length - 1;
  audio[0].addEventListener('ended', function(e){
      songCount++;
      if(songCount >= len){
          // songCount = 0;
          $('.player-song-title').html(songList[0].songTitle);
          $('.player').attr('src', songList[0].songSource1);
      } else{
        $('.player-song-title').html(songList[songCount].songTitle);
        $('.player').attr('src', songList[songCount].songSource1);
      }
    });

  }
}])
