angular.module('starter.controllers',[])

App.controller('Teacherlogin', function($scope, $http,$state,$ionicPopup) {

 $scope.data = {};
    
    $scope.Forgot=function(){
        
          $state.go('Teacherforgotpassword');
        
        
        
    }
       $scope.Teacherlogin = function(){
        var link = 'http://40.65.178.216/ionic/myApp/Teacher/Teacherlogin.php';
        // http://localhost:8080/myApp/Teacherlogin.php
       
           // var link = 'http://localhost:8080/myApp/Teacher/Teacherlogin.php';

        $http.post(link, {email : $scope.temail, password : $scope.tpassword}).then(function (res){
            
   
     $scope.found=res.data.status;
            
        var user=res.data.id1;
           
             
             
            
       
           
           sessionStorage.setItem('user', user);
            
             if($scope.found === "true")
                 
              {
               $state.go('teacherhome');
              
           
             
                
              }
            else
              {
              
              
                     var alertPopup = $ionicPopup.alert({
     
      template: "Incorrect email or password"
    });
          
              
               }

       });
        

         
      };
  
});