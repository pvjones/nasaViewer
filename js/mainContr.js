angular.module('nasaViewer').controller('mainContr', function($scope, apodServ, geolocationFact, weatherServ) {

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



  geolocationFact.getCurrentPosition().then(function(response) {
    var userLat = response.coords.latitude;
    var userLong = response.coords.longitude;
    weatherServ.getWeather(userLat, userLong).then(function(response) {
      var weatherObj = response.data.currently;
      $scope.cloudCover = weatherObj.cloudCover;
      $scope.weatherSummary = weatherObj.summary;
      $scope.visibility = weatherObj.visibility;
      $scope.temperature = weatherObj.temperature;


      var skyView = ""
      if (weatherObj.cloudCover <= 0.1 && weatherObj.visibility >= 9) {
        skyView = "excellent";
      } else if (weatherObj.cloudCover <= 0.2 || weatherObj.visibility >= 5) {
        skyView = "good";
      } else if (weatherObj.cloudCover <= 0.3 || weatherObj.visibility >= 3) {
        skyView = "fair";
      } else if (weatherObj.cloudCover <= 0.5 || weatherObj.visibility >= 1) {
        skyView = "poor";
      }

      $scope.skyView = skyView;
      console.log($scope.skyView);
    })
  });



});