angular.module('nasaViewer').controller('apodContr', function($scope, apodServ) {

 apodServ.getCurrentApod().then(function(response) {
    $scope.currentApod = response.data;
    console.log(response.data);
    
  });
});
