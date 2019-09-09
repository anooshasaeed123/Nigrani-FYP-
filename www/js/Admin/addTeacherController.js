angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('addTeacherController', function($scope, $http,$state,$ionicPopup) {

  $scope.loadMore = function() {
    $http.get('/more-items').success(function(items) {
      useItems(items);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

   $scope.addTeachertBackButton= function(){
        
         
           $state.go('adminhome.teacher');

             
        
      };
    
    
    
      

   $scope.data = {};
      //$scope.data ="hiiii";
    
    
    $scope.checkid=function(){
        
        var id = $scope.data.id;
        console.log(id);
        
        
          
              //  var link = 'http://127.0.0.1:8080/myApp/admin/checkempid.php';
           var link = 'http://40.65.178.216/ionic/myApp/admin/checkempid.php';
      $http.post(link, {id:id}).then(function (res){
         $scope.unamestatus = res.data;
         console.log($scope.unamestatus);

           });
            
        
        
        
        
    }
    
        $scope.checkemail=function(){
        
        var email =$scope.data.TeacherEmail;
        
        
          
                //var link = 'http://127.0.0.1:8080/myApp/admin/checkemail.php';
               var link = 'http://40.65.178.216/ionic/myApp/admin/checkemail.php';
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
     $scope.addTeacherSubmit = function(){
         
         var empid=$scope.data.id;
         
         var password1=$scope.data.password1;
         var password2=$scope.data.password2;
         if(password1==password2){
             
             
            var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
             
             
             
                 
                // var link = 'http://127.0.0.1:8080/myApp/admin/addTeacher.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/addTeacher.php';
         $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
          $http.post(link, {Desig:$scope.data.teacherDesignation ,adminID: $scope.sessionAdminId,fname : $scope.data.teacherfName,lname : $scope.data.teacherlName,address : $scope.data.teacherAddress, 
          cnic : $scope.data.teacherCnic, email : $scope.data.TeacherEmail, username : $scope.data.Teacherusername,
          password : $scope.data.password1, phone : $scope.data.phone,emdid:empid,qualification:$scope.data.qualification}).then(function (res){
            
               $scope.found = res.data;
           if($scope.found == " yup")
              {
                 var alertPopup = $ionicPopup.alert({
     
      template: "Successfully Added"
    });
              }
              if($scope.found != "yup")
              {
            var alertPopup = $ionicPopup.alert({
     
      template: "Please check all your fields and try again."
    });
              }
           

          });
          
             
            
         } else {
            console.log('Not sure!');
         }
      });
         
             
           
             
             
         }
         
         else{
             
             
              var alertPopup = $ionicPopup.alert({
     
      template: "Your password doesn't match"
    });
         }
        
         
     
      };


      
});