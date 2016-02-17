app.factory('showFactory', ['$http', function( $http ) {
  //first get request
  return {showYear: function(year, row) {

    $http.jsonp('https://archive.org/advancedsearch.php?q=BrothersPast,%20year:' +year+ '&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=' +row+ '&page=1&output=json&callback=JSON_CALLBACK')

    .then(function(data) {
      console.log("factory ran");
      return data.data.response.docs;
      });
    }

  }

} ]);


// (function () {
//   var yearFactory = function( year, row ) {
//     $http.jsonp('https://archive.org/advancedsearch.php?q=BrothersPast,%20year:' +year+ '&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=' +row+ '&page=1&output=json&callback=JSON_CALLBACK')
//
//     .then(function(data) {
//       return data.data.response.docs;
//       });
//   };
//
//
//     angular.module('bpStreams').factory('yearFactory', yearFactory);
//
// })
