angular.module('starter.controllers',[])

App.controller('profilecontroller', function($scope, $http,$state) {

 $scope.data = {};
    
           var userid = sessionStorage.getItem('user');
    
  
    
    
     // var link = 'http://localhost:8080/myApp/Teacher/teacherprofile.php';
     var link = 'http://40.65.178.216/ionic/myApp/Teacher/teacherprofile.php';
    
               $http.post(link, {user_id : userid}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
               
                   
            
 

       });
    

    
    

      
});