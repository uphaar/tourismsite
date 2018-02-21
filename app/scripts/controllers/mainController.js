'use strict'; 

angular.module('elegantContainerUiApp')
.controller('MainController', ['$scope', 'mainFactory', '$timeout', function($scope, mainFactory, $timeout){


    $scope.isLoading = true; 

    $scope.showPhotos = false; 
    $scope.message = ""; 
    $scope.pictures = [{

        title:"BurjKhalifa",
        displaytitle:"Burj Khalifa",
        description: "The Burj Khalifa (Arabic: برج خليفة‎, Arabic for Khalifa Tower; pronounced English: /ˈbɜːrdʒ kəˈliːfə/), known as the Burj Dubai before its inauguration, is a megatall skyscraper in Dubai, United Arab Emirates. With a total height of 829.8 m (2,722 ft) and a roof height (excluding antenna) of 828 m (2,717 ft), the Burj Khalifa is the tallest structure in the world since topping out in late 2008."

    }, 
    {
        title:"DesertSafari", 
        displaytitle: "Desert Safari",
        description:"A must for everyone who is visiting UAE. A memory to share with your family and friends back home, This is one safari you cant do back home. We recommend it highly and it will be worth every penny spend!"

    },
    {
        title:"BurjAlArab",
        displaytitle:"Burj Al Arab",
        description:"The Burj Al Arab (Arabic: برج العرب‎, Tower of the Arabs) is a luxury hotel located in Dubai, United Arab Emirates. It is the third tallest hotel in the world (although 39% of its total height is made up of non-occupiable space).Burj Al Arab stands on an artificial island 280 m (920 ft) from Jumeirah beach and is connected to the mainland by a private curving bridge. The shape of the structure is designed to resemble the sail of a ship. It has a helipad near the roof at a height of 210 m (689 ft) above ground."

    },
    {
        title:"GoldSouk",
        displaytitle:"Gold Souk",
        description:"Dubai Gold Souk or Gold Souk (Arabic: سوق الذهب‎), is a traditional market (or souk) in Dubai, UAE. The souk is located in Dubai's commercial business district in Deira, in the locality of Al Dhagaya. The souk consists of over 300 retailers, most of whom are jewellery traders."

    },
    {
        title:"GrandMosque",
        displaytitle:"Grand Mosque",
        description:"Sheikh Zayed Grand Mosque (Arabic: جامع الشيخ زايد الكبير‎) is located in Abu Dhabi, the capital city of the United Arab Emirates.The largest mosque in the country, it is the key place of worship for Friday gathering and Eid prayers. During Eid it may be visited by more than 41,000 people."

    },
    {
        title:"DubaiCreek",
        displaytitle:"Dubai Creek",
        description:"Dubai Creek is a saltwater creek located in Dubai, United Arab Emirates (UAE). Previously it extended to Ras Al Khor Wildlife Sanctuary but as part of the new Dubai canal it extends through to the Persian Gulf. Some sources say that the creek extended as far inland as Al Ain, and that the Ancient Greeks called it River Zara."

    },
    {
        title:"FerrariWorld",
        displaytitle: "Ferrari World",
        description:"Ferrari World Abu Dhabi is an amusement park on Yas Island in Abu Dhabi, United Arab Emirates. It is the first Ferrari-branded theme park and has the record for the largest space frame structure ever built.Formula Rossa, the world's fastest roller coaster, is also located here."

    }

];


$timeout(function() {

    mainFactory.photoRow1.query(function(response){
        
        $scope.photosRow1 = response.resources; 
        $scope.showPhotos = true;
        for(var i=0;i<$scope.photosRow1.length;i++)
        {
            var result = $.grep($scope.pictures, function(e){
                return e.title == $scope.photosRow1[i]["public_id"]; 
            }); 

            if(result.length == 1)
            {
                $scope.photosRow1[i].title = result[0]["displaytitle"]; 
                $scope.photosRow1[i].description = result[0]["description"];
            }
        }
        

    }, function(response){

        $scope.message = "Error: " + response.status + " " + response.statusText; 

    }); 

    mainFactory.photoRow2.query(function(response){
        
                $scope.photosRow2 = response.resources; 
                $scope.showPhotos = true;

                for(var i=0;i<$scope.photosRow2.length;i++)
                {
                    var result = $.grep($scope.pictures, function(e){
                        return e.title == $scope.photosRow2[i]["public_id"]; 
                    }); 
        
                    if(result.length == 1)
                    {
                        $scope.photosRow2[i].title = result[0]["displaytitle"]; 
                        $scope.photosRow2[i].description = result[0]["description"];
                    }
                }
                
        
            }, function(response){
        
                $scope.message = "Error: " + response.status + " " + response.statusText; 
        
            }); 

    mainFactory.photoRow3.query(function(response){
                
                $scope.photosRow3 = response.resources; 
                $scope.showPhotos = true;
                
                for(var i=0;i<$scope.photosRow3.length;i++)
                {
                    var result = $.grep($scope.pictures, function(e){
                        return e.title == $scope.photosRow3[i]["public_id"]; 
                    }); 
        
                    if(result.length == 1)
                    {
                        $scope.photosRow3[i].title = result[0]["displaytitle"]; 
                        $scope.photosRow3[i].description = result[0]["description"];
                    }
                }
                
            }, function(response){
                
                $scope.message = "Error: " + response.status + " " + response.statusText; 
                
            }); 

    mainFactory.photoRow3a.query(function(response){
                
                $scope.photosRow3a = response.resources; 
                $scope.showPhotos = true;

                for(var i=0;i<$scope.photosRow3a.length;i++)
                {
                    var result = $.grep($scope.pictures, function(e){
                        return e.title == $scope.photosRow3a[i]["public_id"]; 
                    }); 
        
                    if(result.length == 1)
                    {
                        $scope.photosRow3a[i].title = result[0]["displaytitle"]; 
                        $scope.photosRow3a[i].description = result[0]["description"];
                    }
                }
                        
                
            }, function(response){
                
                $scope.message = "Error: " + response.status + " " + response.statusText; 
                
            }); 

    mainFactory.photoRow1a.query(function(response){
                
                $scope.photosRow1a = response.resources; 
                $scope.showPhotos = true;
                for(var i=0;i<$scope.photosRow1a.length;i++)
                {
                    var result = $.grep($scope.pictures, function(e){
                        return e.title == $scope.photosRow1a[i]["public_id"]; 
                    }); 
        
                    if(result.length == 1)
                    {
                        $scope.photosRow1a[i].title = result[0]["displaytitle"]; 
                        $scope.photosRow1a[i].description = result[0]["description"];
                    }
                }
                        
                
            }, function(response){
                
                $scope.message = "Error: " + response.status + " " + response.statusText; 
                
            }); 
                $scope.isLoading = false;
        },1);

}]); 