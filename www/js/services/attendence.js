angular.module('starter.controllers',[])

App.factory('attendence', function () {
    
    
    
    
    
     var attendence = [];

        function set(objectName, data) {
            attendence[objectName] = data;
        }
        function get(objectName) {
            return attendence[objectName];
        }

        return {
            set: set,
            get: get
        }

    



});