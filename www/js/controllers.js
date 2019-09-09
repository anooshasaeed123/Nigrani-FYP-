angular.module('starter.controllers',[])

App.controller('alogininctrl', function($scope, $http,$state,$ionicPopup) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.loginsubmit = function(){

        // var link = 'http://127.0.0.1:8080/myApp/admin/adminlogin.php';
             var link = 'http://40.65.178.216/ionic/myApp/admin/adminlogin.php'
 
         $http.post(link, {email : $scope.data.email, password : $scope.data.loginpassword}).then(function (res){
               $scope.found = res.data;
               // console.log($scope.found);
          sessionStorage.clear();
          sessionStorage.setItem('adminId',$scope.found.id1);
            // console.log($scope.found);
             
             
           if($scope.found.status == "true")
                 
              {
               $state.go('adminhome');
              
           
             
                
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
App.controller('plogininctrl', function($scope, $http,$state,$ionicPopup) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.loginsubmit = function(){
         
       
         //var link = 'http://localhost:8080/myApp/parent/parentLogin.php';
          var link = 'http://40.65.178.216/ionic/myApp/parent/parentLogin.php'
 
         $http.post(link, {email : $scope.data.parentemail, password : $scope.data.parentPassword}).then(function (res){
          $scope.found = res.data;
             console.log($scope.found);
          sessionStorage.clear();
          sessionStorage.setItem('parentId',$scope.found.id1);
             console.log($scope.found.id1);
             

     if($scope.found.status == "true")
                 
              {
               $state.go('parenthome');
              
           
             
                
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