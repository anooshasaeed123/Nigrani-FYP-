angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('addParentController', function($scope, $http,$state,$ionicPopup) {
    
function Ctrl($scope) {
      $scope.text = 'me@example.com';
      $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
    }



  $scope.loadMore = function() {
    $http.get('/more-items').success(function(items) {
      useItems(items);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

   $scope.addParentBackButton= function(){
        
         
           $state.go('adminhome.parent');

             
        
      };
          $scope.checkgid=function(){
        
        var id = $scope.data.guardianid;
        console.log(id);
        
        
          
              //  var Showsemesterlink = 'http://127.0.0.1:8080/myApp/admin/checkgid.php';
                 var Showsemesterlink = 'http://40.65.178.216/ionic/myApp/admin/checkgid.php';
      $http.post(Showsemesterlink, {id:id}).then(function (res){
         $scope.unamestatus = res.data;
         console.log($scope.unamestatus);

           });
            
        
        
        
        
    }
          
          
             
        $scope.checkemail=function(){
        
        var email =$scope.data.parentEmail;
        
        
          
               // var link = 'http://127.0.0.1:8080/myApp/admin/checkpemail.php';
               var link = 'http://40.65.178.216/ionic/myApp/admin/checkpemail.php';
      $http.post(link, {email:email}).then(function (res){
         $scope.unamestatus = res.data;
         console.log($scope.unamestatus);

           });
            
        
        
        
        
    }
        
     $scope.addClass = function(unamestatus){
  if(unamestatus == 'Available'){
   return 'response exists';
  }else if(unamestatus == 'Not available'){
   return 'response not-exists';
  }else{
   return 'hide';
  }
 }
      

   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.addParentSubmit = function(){
         
         
        var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
             $scope.add();
             
            
         } else {
            console.log('Not sure!');
         }
      });
         
         
       
 


      $scope.add=function(){
          
          
             $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);

        // var link = 'http://127.0.0.1:8080/myApp/admin/addParent.php';
             var link = 'http://40.65.178.216/ionic/myApp/admin/addParent.php';

 
         $http.post(link, {adminID: $scope.sessionAdminId,fname : $scope.data.parentFirstname, lname : $scope.data.parentLastname, email : $scope.data.parentEmail, password : $scope.data.parentPassword,
          username : $scope.data.parentUsername, cnic : $scope.data.parentCNIC,
          address : $scope.data.parentAddress, contactno : $scope.data.parentContactNumber,guardianid:$scope.data.guardianid}).then(function (res){
            
               $scope.found = res.data;
             console.log($scope.found);
           if($scope.found == 1)
              {
                    var alertPopup = $ionicPopup.alert({
     
      template: 'Parent sucessfully added'
    });
        
              }
           else
              {
                   var alertPopup = $ionicPopup.alert({
     
      template: 'Please check your fields and try again'
    });
        
              }
            // else
            //   {
              
            //   alert("User not added");
              
            //    }


          });
         
          
          
          
      }

     
         
         
      };


      
});