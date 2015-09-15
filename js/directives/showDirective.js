app.directive('showDirective', function() {
  return {
    restrict: "E",
    template: "<div>"+
            "<div id='mainDiv'> </div>" +
            "<button data-ng-click='append()'>Add</button>" +
            "</div>",
    controller: function($http, $scope, $element) {

      //get request
      $http.jsonp('https://archive.org/advancedsearch.php?q=BrothersPast&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=50&page=1&output=json&callback=JSON_CALLBACK')
      .then(function(data) {
      //console.dir(data);
      $scope.shows = data.data.response.docs


    }).then(function($scope, $element, $attrs) {
                  mainDiv.append = function() {
                  var p = angular.element("<p />");
                  p.text("Appended");
                  $element.find("div").append(p);
              }
            }
          )
        }
      }
});
