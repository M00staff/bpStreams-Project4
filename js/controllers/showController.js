//dependency injection for AJAX calls
app.controller('showController', ['$http', '$scope', function($http, $scope) {


  //get request
  $http.jsonp('https://archive.org/advancedsearch.php?q=BrothersPast&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=5&page=1&output=json&callback=JSON_CALLBACK')
  .success(function(data) {

    $scope.showList = data;
    console.log(data);

  })
  .error(function(data) {
    console.log("error with AJAX request");
  });
} ]);
