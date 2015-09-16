app.directive('getSongD', function() {
  return {
    restrict: 'E',
    controller: 'songController',
    scope: {
      songs: "@",
      songListFinal: "@"
    },
    link: function(songs, songListFinal){
      $.each(songs, function getSong(i, songs, songList) {           //iterate and add name and title to variables
        var fileName = songs.name;
        var songName = songs.title;
        var songList = {};
        var ext = fileName.substr(fileName.lastIndexOf('.') + 1);   //check file type - looks at everything after '.'

          if ((ext === 'ogg' || ext === 'mp3') && songName != undefined) {
            songList.songTitle = songName;
            songList.songFile = fileName;
            //songList.push({songTitle: songName, songFile: fileName})
            //songList += '<li class="songs-li" data-song-title="' + songName + '" data-song-src="' + fileName + '">' + songName + '</li>';
            //$scope.songs = songList;
            console.log(songList);
            return songList;
            //$scope.songs = "songList"
          }

      })
      console.log("directive ran");
    },
    templateUrl: "/views/songsPartial.html",
    // template: '<h1>HELLO<h1>',
  };
});





// app.directive('showDirective', function() {
//   return {
//     restrict: "E",
//     template: "<div>"+
//             "<div id='mainDiv'> </div>" +
//             "<button data-ng-click='append()'>Add</button>" +
//             "</div>",
//     controller: function($http, $scope, $element) {
//
//       //get request
//       $http.jsonp('https://archive.org/advancedsearch.php?q=BrothersPast&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=50&page=1&output=json&callback=JSON_CALLBACK')
//       .then(function(data) {
//       //console.dir(data);
//       $scope.shows = data.data.response.docs
//
//
//     }).then(function($scope, $element, $attrs) {
//                   mainDiv.append = function() {
//                   var p = angular.element("<p />");
//                   p.text("Appended");
//                   $element.find("div").append(p);
//               }
//             }
//           )
//         }
//       }
// });
