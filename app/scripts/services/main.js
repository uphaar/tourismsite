'use strict'; 

angular.module('elegantContainerUiApp')
.service('mainFactory', ['$resource', 'cloudinary', function($resource, cloudinary){

    
    return {
        photoRow1:$resource("http://res.cloudinary.com/elegantbytes/image/list/row1.json", {}, {

        'query':{method:'GET', isArray:false}
    }), 
        photoRow2:$resource("http://res.cloudinary.com/elegantbytes/image/list/row2.json", {}, {
        
                'query':{method:'GET', isArray:false}
    }), 
        photoRow3:$resource("http://res.cloudinary.com/elegantbytes/image/list/row3.json", {}, {
        
                'query':{method:'GET', isArray:false}
    }),
    
        photoRow3a:$resource("http://res.cloudinary.com/elegantbytes/image/list/row3a.json", {}, {
        
                'query':{method:'GET', isArray:false}
    }),
            
        photoRow1a:$resource("http://res.cloudinary.com/elegantbytes/image/list/row1a.json", {}, {
                
                    'query':{method:'GET', isArray:false}
    })

    };

}]); 