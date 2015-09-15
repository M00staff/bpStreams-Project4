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

      console.log('https://archive.org/metadata/' + showID);

      $http.jsonp('https://archive.org/metadata/' + showID)
      .then(function(showJson) {
        //console.log(response);
      }, function(error) {
        //console.dir(response);
        console.log("ERROR");
      })
    }
} ])
