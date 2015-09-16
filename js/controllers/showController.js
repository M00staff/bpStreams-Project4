//dependency injection for AJAX calls
app.controller('showController', ['$http', '$scope', function($http, $scope) {
  //get request
  $http.jsonp('https://archive.org/advancedsearch.php?q=BrothersPast&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=50&page=1&output=json&callback=JSON_CALLBACK')
  .then(function(data) {
    $scope.shows = data.data.response.docs;
    });
} ]);




app.controller('songController', ['$http', '$scope', function($http, $scope) {
    $scope.go = function getSongNow(showID) {
      console.log('https://archive.org/metadata/' + showID + '?callback=JSON_CALLBACK');
      $http.jsonp('https://archive.org/metadata/' + showID + '?callback=JSON_CALLBACK')
      .then(function(response) {
        //var songs = response.data.files;
        //console.log(songs);
        // var songs = response.data.files;
          var songList = [];
        $.each(response.data.files, function getSong(i, val) {           //iterate and add name and title to variables
          var fileName = val.name;
          var songName = val.title;
          // console.log(songName);
          // console.log(fileName);
          var ext = fileName.substr(fileName.lastIndexOf('.') + 1);   //check file type - looks at everything after '.'

            if ((ext === 'ogg' || ext === 'mp3') && songName != undefined) {
              songList.push({songTitle: songName, songFile: fileName});
              //songList.push({songTitle: songName, songFile: fileName})
              //songList += '<li class="songs-li" data-song-title="' + songName + '" data-song-src="' + fileName + '">' + songName + '</li>';
              //$scope.songs = songList;
              console.log(songList);
              $scope.songs = songList
            }
          })
        })
    }
} ])


app.controller('getSongCrtl', ['$http', '$scope', function($http, $scope) {
  $scope.playSong = function(file) {
  console.log(file);
  }
}])
