angular.module('starter.controllers',[])

App.controller('parentprofilecontroller', function($scope, $http,$state) {

 $scope.data = {};
    
           var userid =  sessionStorage.getItem('parentId');
    
  
    
    
      //var link = 'http://localhost:8080/myApp/parent/profile.php';
      var link = 'http://40.65.178.216/ionic/myApp/parent/profile.php';
    
               $http.post(link, {user_id : userid}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                   console.log($scope.profile);
               
                   
            
 

       });
    
    
         // var link = 'http://localhost:8080/myApp/parent/retrieveStudents.php';
      var link = 'http://40.65.178.216/ionic/myApp/parent/retrieveStudents.php';
    
               $http.post(link, {id : userid}).then(function (res){
                   
                 
    
                   $scope.student=res.data;
                   console.log($scope.student);
               
                   
            
 

       });
    
    

    
    

      
});