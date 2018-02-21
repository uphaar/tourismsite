'use strict';

angular.module('elegantContainerUiApp', ['ui.router', 'ngResource', 'cloudinary', 'ngAnimate'])
.config(function($stateProvider, $urlRouterProvider, cloudinaryProvider, $animateProvider, $locationProvider){

  $locationProvider.html5Mode(true); 

  cloudinaryProvider.set("cloud_name","elegantbytes"); 

  $animateProvider.customFilter(function(node, event, options){

    return event === 'enter' || event === 'leave';

  });

  $stateProvider

    .state('app', {

        url:'/', 
        views: {
            'header' : {
                templateUrl:'views/header.html',
                controller:'HeaderController'

            }, 
            'content' : {
                templateUrl:'views/main.html',
                controller:'MainController'

            }, 
            'footer' : {
                templateUrl:'views/footer.html'
            }



        }


    })

    .state('app.activitydetail', {
        url: ':id', 
        views: {

          'content@' : {
              templateUrl: 'views/activitydetail.html',
              controller:'ActivityController'

          }

        }

    })


    $urlRouterProvider.otherwise('/'); 


});
