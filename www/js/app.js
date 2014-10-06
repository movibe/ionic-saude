// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','donut.controllers', 'barchart.controllers', 'linechart.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DonutCtrl'
        }
      }
    })

    .state('tab.dados', {
      url: '/dados',
      views: {
        'tab-dados': {
          templateUrl: 'templates/tab-dados.html',
          controller: 'DadosCtrl'
        }
      }
    })  

    .state('tab.fontes', {
      url: '/fontes',
      views: {
        'tab-fontes': {
          templateUrl: 'templates/tab-fontes.html',
          controller: 'FontesCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

})

.controller('popover', function($scope, $ionicPopover, $state) {
  $ionicPopover.fromTemplateUrl('popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });
  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });

  $scope.example = [
  {
    id: "1",
    title: "MorrisJS Chart",
    url: "morris"
  },
  {
    id: "2",
    title: "ChartJS Chart",
    url: "chartjs"
  },
  {
    id: "3",
    title: "CanvasJS Chart",
    url: "canvasjs"
  }
  ];

  if($state.is('tab.donut')){
    $scope.chartType = "donutchart";
  }
  else if($state.is('tab.bar')){
    $scope.chartType = "barchart";
  }
  else if($state.is('tab.line')){
    $scope.chartType = "linechart";
  }
})

;

