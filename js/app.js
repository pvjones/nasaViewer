angular.module('nasaViewer', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'mainContr',
        templateUrl: '../views/home.html'
      })
      .state('apod', {
        url: '/apod',
        controller: 'apodContr',
        templateUrl: '../views/apod.html'
      });
      // .state('apodByDate', {
      //   url: '/apod-by-date',
      //   controller: 'apodContr',
      //   temmplateUrl: '../views/apod-by-date.html'
      // })

      $urlRouterProvider
        .otherwise('/')

      $locationProvider.html5mode(true);
  });