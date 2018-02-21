'use strict'; 

angular.module('elegantContainerUiApp')
.controller('HeaderController', ['$scope', function($scope){

    $scope.activities = [{
            name:'Burj Khalifa',
            title:'BurjKhalifa'
        },
        {
            name:'Burj Al Arab',
            title:'BurjAlArab'
        },
        {
            name:'Desert Safari',
            title:'DesertSafari'
        },
        {
            name:'Dubai Creek',
            title:'DubaiCreek'

        },
        {
            name:'Gold Souk',
            title:'GoldSouk'
        },
        {
            name: 'Grand Mosque',
            title:'GrandMosque'
        },
        {
            name:'Ferrari World',
            title:'FerrariWorld'



    }]; 

    $scope.destinations = [{
        name:'Abu Dhabi',
        title:'AbuDhabi'
    },
    {
        name:'Dubai',
        title:'Dubai'
    },
    {
        name:'Sharjah',
        title:'Sharjah'
    



}]; 

$scope.getActiveMenu = function(name) {
    $scope.activeMenu = name;

}

}]); 