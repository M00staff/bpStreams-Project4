console.clear();

$.ajax({
  type: "GET",
  url: "https://archive.org/advancedsearch.php?q=BrothersPast&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=50&page=1&output=json&callback=callback",
  dataType: 'jsonp',
  success: function(data) {
      var shows = data.response.docs,
        showsLis = '';

      $.each(shows, function(i, val) {
          var t = val.title,
            i = val.identifier;
          showsLis += '<li class="shows-li" data-show-title="' + t + '" data-show-identifier="' + i + '">' + t + '</li>';
        }) //each loop

      $('.shows-list').append(showsLis);

      $('.shows-list .shows-li').on('click', function() {
          var s = $(this),
            showId = s.attr('data-show-identifier');

          $('.shows-list .shows-li').removeClass('active');
          s.addClass('active');

          var newUrl = 'https://archive.org/metadata/' + showId;

          $.ajax({
              type: "GET",
              url: newUrl,
              dataType: 'jsonp',
              success: function(showJson) {

                var songLis = "",
                  baseUrl = showJson.d1,
                  dir = showJson.dir;

                $.each(showJson.files, function(i, val) {
                  var fileName = val.name,
                    songName = val.title,
                    ext = fileName.substr(fileName.lastIndexOf('.') + 1);

                  if ((ext === 'ogg' || ext === 'mp3') && songName != undefined) {
                    songLis += '<li class="songs-li" data-song-title="' + songName + '" data-song-src="' + fileName + '">' + songName + '</li>';
                  }
                })

                $('.show-songs-list')
                  .html('') //removes any previous song lists
                  .append(songLis);

                $('.show-songs-list .songs-li').on('click', function() {
                  var songJonx = $(this),
                    songSrc = 'http://' + baseUrl + dir + '/' + songJonx.attr('data-song-src'),
                    songTitle = songJonx.attr('data-song-title');

                  $('.show-songs-list li').removeClass('active');
                  songJonx.addClass('active');

                  $('.player-song-title').html(songTitle);
                  $('.player').attr('src', songSrc);

                })
              }
            }) //second ajax req
        }) //show on click
    } //success
}); //first ajax req
