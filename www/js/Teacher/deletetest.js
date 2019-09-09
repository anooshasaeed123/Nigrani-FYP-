angular.module('starter.controllers',[])

App.controller('deletetestcontroller', function($scope, $http,$state,$ionicPopup) {

 $scope.data = {};
    
           var userid = sessionStorage.getItem('user');
    
  
    
    
    // var link = 'http://localhost:8080/myApp/Teacher/listTest.php';
     var link = 'http://40.65.178.216/ionic/myApp/Teacher/listtest.php';
    
               $http.post(link, {user_id : userid}).then(function (res){
                   
                
    
                   $scope.test=res.data;
                   console.log($scope.test);
                   
            
 

       });
    
   $scope.delete = function(x){
       
       
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
           var testid=x.testid;
       
       
       
          // var link = 'http://localhost:8080/myApp/Teacher/deletetest.php';
              var link = 'http://40.65.178.216/ionic/myApp/Teacher/deletetest.php';
    
               $http.post(link, {user_id : userid,testid:testid}).then(function (res){
                   
                 
    
                   $scope.result=res.data;
                   
                   console.log(res.data);
                  
                   
            
 

       });
    
             
            
         } else {
            console.log('Not sure!');
         }
      });
         
       
       
       
       
      
   }
    

    
    

      
});