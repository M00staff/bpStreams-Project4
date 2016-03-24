(function(){
  angular
    .module("bpStreams")
      .factory('showFactory', ['$http', function( $http ) {
        return {
          showYear: function(year, row) {
          return $http.jsonp('https://archive.org/advancedsearch.php?q=BrothersPast,%20year:' +year+ '&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=' +row+ '&page=1&output=json&callback=JSON_CALLBACK')
          }
        }
    } ]);
}());


(function(){
  angular
    .module("bpStreams")
    .factory('songFactory', ['$http', function( $http ) {
      return {
        showPick: function getSongNow(showID) {
          return $http.jsonp('https://archive.org/metadata/' + showID + '?callback=JSON_CALLBACK')
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
            return songList;
          })
        }
      }
    } ]);
}());

(function(){
  angular
    .module("bpStreams")
    .factory('playFactory', ['$http', function( $http ) {
      return {
        songPick: function(title, file, d1, dir, songList, index) {
          var songSrc = {title: title, source: 'http://' + d1 + dir + '/' + file};

                $('.player-song-title').html(songSrc.title);          //actual changing of audio source
                $('.player').attr('src', songList[index].songSource1);

                                              //=========== event listener for next song
                var audio = $('audio');
                var songCount = index;
                var len = songList.length - 1;
                audio[0].addEventListener('ended', function(e){
                songCount++;
              if(songCount >= len){
                  $('.player-song-title').html(songList[0].songTitle);
                  $('.player').attr('src', songList[0].songSource1);
              } else{
                $('.player-song-title').html(songList[songCount].songTitle);
                $('.player').attr('src', songList[songCount].songSource1);
              }
          });
        }
      }
    } ]);
}());
