'use strict'; 

angular.module('elegantContainerUiApp')
.directive('activeWidget', [function(){
    

    function setActive(menuId, element, $scope) {

        if(menuId == $scope.activeMenu)
        {
            element.addClass('active');
            
        }
        else
        {
            element.removeClass('active');
        }
        
    }


    return {
        link: function($scope, $element, $attrs) {
            
            var menuElements = []; 
            menuElements.push({menuItem:$attrs["activeWidget"], node:$element});
            $scope.$watch('activeMenu', function(newValue, oldValue){
                

                for(var i=0; i<menuElements.length;i++)
                {

                    var newResult = menuElements[i];
                    setActive(newResult.menuItem, newResult.node, $scope); 
                }


            });
            

        }


    }; 



}]); 