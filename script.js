var audio;
var playlist;
var tracks;
var current;

init();
function init(){
    current = 0;
    audio = $('audio');
    playlist = $('#playlist');
    tracks = playlist.find('li a');
    len = tracks.length - 1;
    audio[0].volume = .10;
    playlist.find('a').click(function(e){
        e.preventDefault();
        link = $(this);
        current = link.parent().index();
        run(link, audio[0]);
    });
    audio[0].addEventListener('ended',function(e){
        current++;
        if(current == len){
            current = 0;
            link = playlist.find('a')[0];
        }else{
            link = playlist.find('a')[current];
        }
        run($(link),audio[0]);
    });
}
function run(link, player){
        player.src = link.attr('href');
        par = link.parent();
        par.addClass('active').siblings().removeClass('active');
        audio[0].load();
        audio[0].play();
}

// //jQuery Soup
//
// $.ajax({
//   type: "GET",
//   url: "https://archive.org/advancedsearch.php?q=BrothersPast&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=50&page=1&output=json&callback=callback",
//   dataType: 'jsonp',
//   success: function(data) {
//       var shows = data.response.docs,
//         showsLis = '';
//         console.log(shows);                       // testing the return object
//       $.each(shows, function(i, val) {
//           var t = val.title,
//             i = val.identifier;
//           showsLis += '<li class="shows-li" data-show-title="' + t + '" data-show-identifier="' + i + '">' + t + '</li>';
//         }) //each loop WILL BE NG-REPEAT
//
//       $('.shows-list').append(showsLis);
//
//
//       $('.shows-list .shows-li').on('click', function() {
//           var s = $(this),
//             showId = s.attr('data-show-identifier');           //half the link for the newUrl
//
//           $('.shows-list .shows-li').removeClass('active');
//           s.addClass('active');                                 //hover function stuff
//
//           var newUrl = 'https://archive.org/metadata/' + showId;  //making the new Url for song and the next AJAX req
//
//           $.ajax({
//               type: "GET",
//               url: newUrl,
//               dataType: 'jsonp',
//               success: function(showJson) {
//
//                 var songLis = "",           //putting song list metadata into variables
//                   baseUrl = showJson.d1,
//                   dir = showJson.dir;
//
//                 $.each(showJson.files, function(i, val) {           //iterate and add name and title to variables
//                   var fileName = val.name,
//                     songName = val.title,
//                     ext = fileName.substr(fileName.lastIndexOf('.') + 1);   //check file type - looks at everything after '.'
//
//                   if ((ext === 'ogg' || ext === 'mp3') && songName != undefined) {
//                     songLis += '<li class="songs-li" data-song-title="' + songName + '" data-song-src="' + fileName + '">' + songName + '</li>';
//                   }
//                 })
//
//                 $('.show-songs-list')
//                   .html('')             //removes any previous song lists and appends songLis to Div
//                   .append(songLis);
//
//                 $('.show-songs-list .songs-li').on('click', function() {        //changes the audio source
//                   var songJonx = $(this),
//                     songSrc = 'http://' + baseUrl + dir + '/' + songJonx.attr('data-song-src'),
//                     songTitle = songJonx.attr('data-song-title');
//
//                   $('.show-songs-list li').removeClass('active');         //ungrey the old li and grey the new one
//                   songJonx.addClass('active');
//
//                   $('.player-song-title').html(songTitle);          //actual changing of audio source
//                   $('.player').attr('src', songSrc);
//
//                 })
//               }
//             }) //second ajax req
//         }) //show on click
//     } //success
// }); //first ajax req
