angular.module('nasaViewer').service('apodServ', function($http) {

  var apiKey = '2DGaM1ahLanQmj6wbsyHjLpe54YCodSEzsvm4cjZ'
  var currentApodReq = {
    method: 'GET',
    url: 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey,
  } ;

  this.getCurrentApod = function() {
    return $http(currentApodReq)
  };


});