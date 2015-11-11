angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    
      
        
    .state('mainMenu', {
      url: '/main',
      templateUrl: 'templates/mainMenu.html',
      controller: 'mainMenuCtrl'
    })
        
      
    
      
        
    .state('tabsController.kejadianLama', {
      url: '/lama',
      views: {
        'tab1': {
          templateUrl: 'templates/kejadianLama.html',
          controller: 'kejadianLamaCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.kejadianBaru', {
      url: '/baru',
      views: {
        'tab2': {
          templateUrl: 'templates/kejadianBaru.html',
          controller: 'kejadianBaruCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.finish', {
      url: '/finish',
      views: {
        'tab3': {
          templateUrl: 'templates/finish.html',
          controller: 'finishCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/play',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});