'use strict';
angular.module('elegantContainerUiApp', ['cloudinary']);

function configure(CloudinaryProvider) {
    CloudinaryProvider.configure({
        cloud_name:'elegantbytes',
        api_key:'135868517354787'
    }); 

}

angular.module('elegantContainerUiApp').config(configure); 
