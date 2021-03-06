'use strict';

/**
 * @ngdoc overview
 * @name micromedicaApp
 * @description
 * # micromedicaApp
 *
 * Main module of the application.
 */
angular
  .module('micromedicaApp', [
    'ngAnimate',
    'ngAria',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'slickCarousel'
  ])
  .run(function ($http, $rootScope) {
    $http.get('bd/marcas.json').then(function(data) {
      $rootScope.marcas = data.data;
      console.log(data);
      $rootScope.menuOpened = false;
      $rootScope.openMenu = function() {
        $rootScope.menuOpened = $rootScope.menuOpened;
      };
    });
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/productos', {
        templateUrl: 'views/productos.html',
        controller: 'ProductosCtrl',
        controllerAs: 'productos'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/partners', {
        templateUrl: 'views/partners.html',
        controller: 'PartnersCtrl',
        controllerAs: 'partners'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
