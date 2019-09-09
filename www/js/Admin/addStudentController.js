angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('addStudentController', function($scope, $http,$state,$filter,$ionicPopup) {




  $scope.loadMore = function() {
    $http.get('/more-items').success(function(items) {
      useItems(items);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

   $scope.addStudentBackButton= function(){
        
         
           $state.go('adminhome.student');

             
        
      };
  
    
    
     $scope.data = {};
    
    
        $scope.checkemail=function(){
        
        var email =$scope.data.studentEmail;
        
        
          
               // var link = 'http://127.0.0.1:8080/myApp/admin/checkstudentemail.php';
               var link = 'http://40.65.178.216/ionic/myApp/admin/checkstudentemail.php';
      $http.post(link, {email:email}).then(function (res){
         $scope.unamestatus = res.data;
         console.log($scope.unamestatus);

           });
            
        
        
        
        
            
            
    }
        
           //var link = 'http://localhost:8080/myApp/admin/getprogram.php';
           var link = 'http://40.65.178.216/ionic/myApp/admin/getprogram.php';
          $http.get(link).then(function(res){
              
          $scope.programs=res.data;
              
              console.log($scope.programs);
             
        
        
          });
        
        $scope.checkrollnumber=function(){
        
        var rollnumber =$scope.data.studentRollNo;
        
        
          
               // var link = 'http://127.0.0.1:8080/myApp/admin/checkstudentrollnumber.php';
               var link = 'http://40.65.178.216/ionic/myApp/admin/checkstudentrollnumber.php';
      $http.post(link, {rollnumber:rollnumber}).then(function (res){
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
     $scope.addStudentSubmit = function(){

          $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
         

         
         
         
         
      
      
         
         
         
        var password1=$scope.data.studentPassword1;
         var password2=$scope.data.studentPassword2;
         if(password1==password2){
             
                  var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
             
                var  date= $filter('date')($scope.data.dueDate, "dd/MM/yyyy");
                // var link = 'http://127.0.0.1:8080/myApp/admin/addStudent.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/addStudent.php';
                 $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
             
             
         $http.post(link, {adminid : $scope.sessionAdminId, fname : $scope.data.StudentFirstname, lname : $scope.data.studentLastname, std_email : $scope.data.studentEmail, std_username : $scope.data.studentUserName,
          std_password : $scope.data.studentPassword1,std_rollno : $scope.data.studentRollNo, std_address : $scope.data.studentAddress, gender : $scope.data.genderSelect,
          date : date, std_cnic: $scope.data.studentCinic, Guardianid: $scope.data.GuardianID,program:$scope.data.program}).then(function (res){

               $scope.found = res.data;
             console.log($scope.found);
           if($scope.found == " yup")
              {
                 var alertPopup = $ionicPopup.alert({
     
      template: "Successfully Added"
    });
              }
            else
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