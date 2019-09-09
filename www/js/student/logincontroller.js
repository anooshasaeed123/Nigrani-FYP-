angular.module('starter.controllers',[])

App.controller('studentlogin', function($scope, $http,$state) {

 $scope.data = {};
       $scope.login = function(){
        // var link = 'http://40.65.178.216/ionic/myApp/Teacherlogin.php';
        // http://localhost:8080/myApp/Teacherlogin.php
       
           // var link = 'http://localhost:8080/myApp/student/login.php';
             var link = 'http://40.65.178.216/ionic/myApp/student/login.php';

        $http.post(link, {username : $scope.username, password : $scope.password}).then(function (res){
            
   
     $scope.found=res.data.status;
        var user=res.data.id1;
           
             
             
            
       
           
           sessionStorage.setItem('user', user);
            
             if($scope.found === "true")
                 
              {
               $state.go('studenthome');
              
           
             
                
              }
            else
              {
              
              alert("username or password is incorrect");
              
               }

       });
        

         
      };
      
});