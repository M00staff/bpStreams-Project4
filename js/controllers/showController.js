//dependency injection for AJAX calls
app.controller('showController', ['$http', '$scope', function($http, $scope) {
  //get request
  $scope.pickYear = function(year) {
  $http.jsonp('https://archive.org/advancedsearch.php?q=BrothersPast,%20year:' +year+ '&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=600&page=1&output=json&callback=JSON_CALLBACK')

  .then(function(data) {
    $scope.shows = data.data.response.docs;
    //console.log(data.data.response.docs);
    });
  }
} ]);




app.controller('songController', ['$http', '$scope', function($http, $scope) {
    $scope.go = function getSongNow(showID) {
      //console.log('https://archive.org/metadata/' + showID + '?callback=JSON_CALLBACK');
      $http.jsonp('https://archive.org/metadata/' + showID + '?callback=JSON_CALLBACK')
      .then(function(response) {
        //var songs = response.data.files;
        //console.log(songs);
        // var songs = response.data.files;
          //================================MAYBE PUT THIS INTO A SERVICE inject into another controller and use for footer/playlist
          var songList = [];
        $.each(response.data.files, function getSong(i, val) {           //iterate and add name and title to variables
          var fileName = val.name;
          var songName = val.title;
          var baseUrl = response.data.d1;
          //console.log(baseUrl);
          var dir = response.data.dir;
          //console.log(dir);
          // console.log(songName);
          // console.log(fileName);
          var ext = fileName.substr(fileName.lastIndexOf('.') + 1);   //check file type - looks at everything after '.'

            if ((ext === 'ogg' || ext === 'mp3') && songName != undefined) {
              songList.push({songTitle: songName, songFile: fileName, deeOne: baseUrl, directory: dir, songSource1: 'http://' + baseUrl + dir + '/' + fileName});
              //songList.push({songTitle: songName, songFile: fileName})
              //songList += '<li class="songs-li" data-song-title="' + songName + '" data-song-src="' + fileName + '">' + songName + '</li>';
              //$scope.songs = songList;
              //console.log(songList);
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


  //console.log(index);
  var audio = $('audio');
  var songCount = index;
  var len = songList.length - 1;
  audio[0].addEventListener('ended', function(e){
      songCount++;
      if(songCount == len){
          songCount = 0;
          $('.player-song-title').html(songList[songCount].songTitle);
          $('.player').attr('src', songList[songCount].songSource1);
      } else{
        $('.player-song-title').html(songList[songCount].songTitle);
        $('.player').attr('src', songList[songCount].songSource1);
      }
    });

  }
}])
