//dependency injection for AJAX calls
app.controller('showController', ['$http', '$scope', function($http, $scope) {


  //get request
  $http.jsonp('https://archive.org/advancedsearch.php?q=BrothersPast&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=50&page=1&output=json&callback=JSON_CALLBACK')
  .then(function(data) {
    $scope.shows = data.data.response.docs;
    });
} ]);




app.controller('songController', ['$http', '$scope', function($http, $scope) {

    $scope.go = function(showID) {

      console.log('https://archive.org/metadata/' + showID + '?callback=JSON_CALLBACK');

      $http.jsonp('https://archive.org/metadata/' + showID + '?callback=JSON_CALLBACK')
      .then(function(response) {
        $scope.songs = response.data.files;
        // var songs = response.data.files;
        //console.log(songs);
      })
    }
} ])

        // $.each(response.data.files, function getSong(i, val, songList) {           //iterate and add name and title to variables
        //   var fileName = val.name;
        //   var songName = val.title;
        //   var songList = {};
        //   var ext = fileName.substr(fileName.lastIndexOf('.') + 1);   //check file type - looks at everything after '.'
        //
        //     if ((ext === 'ogg' || ext === 'mp3') && songName != undefined) {
        //       songList.songTitle = songName;
        //       songList.songFile = fileName;
        //       //songList.push({songTitle: songName, songFile: fileName})
        //       //songList += '<li class="songs-li" data-song-title="' + songName + '" data-song-src="' + fileName + '">' + songName + '</li>';
        //       //$scope.songs = songList;
        //       console.log(songList);
        //       return songList;
        //       //$scope.songs = "songList"
        //     }
        //
        // })
