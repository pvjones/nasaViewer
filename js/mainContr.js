angular.module('nasaViewer').controller('mainContr', function($scope, apodServ) {

//default background image (set because sometimes images[randomCount] below is evaluating undefined)
  $scope.bgUrl = {
        'background-image': "url('../images/home/bg-01.jpg')"
      } 

  $scope.setBgImage = function() {
    var imgCount = 4;
    var dir = '../images/home/';
    var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
    var images = [
      "bg-01.jpg",
      "bg-02.jpg",
      "bg-03.jpg",
      "bg-04.jpg"
    ];

    if (images[randomCount]) {
      $scope.bgUrl = {
        'background-image': "url('" + dir + images[randomCount] + "')"
      }
    }
  }


  apodServ.getCurrentApod().then(function(response) {
    $scope.currentApod = response.data;
  });



});