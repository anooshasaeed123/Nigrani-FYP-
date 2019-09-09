angular.module('starter.controllers',[])

App.controller('forgotcontroller', function($scope, $http,$state,$ionicPopup) {
   
    $scope.back=function(){
        
        
        $state.go('teacherlogin')
    }
      //var Link = 'http://127.0.0.1:8080/myApp/teacher/security.php';
       var Link = 'http://40.65.178.216/ionic/myApp/Teacher/security.php';
      $http.post(Link, {}).then(function (res){
         $scope.question= res.data;
         console.log($scope.question);

           });
    
    
    $scope.data = {};
    
  
    $scope.continue = function(){
        
     
    
        
      var question=$scope.data.question;
    var email = $scope.data.email;
        var answer = $scope.data.answer;
        
        
        
        
            //var Link = 'http://127.0.0.1:8080/myApp/teacher/forgotcheck.php';
         var Link = 'http://40.65.178.216/ionic/myApp/Teacher/forgotcheck.php';
      $http.post(Link, {question:question,email:email,answer:answer}).then(function (res){
         $scope.question= res.data;
         console.log($scope.question);
          
          if ($scope.question==' yup'){
              
              
           var alertPopup = $ionicPopup.alert({
     
      template: 'Congratulation. You can now change your password'
    });
              sessionStorage.setItem('femail',email);
                 $state.go('changepassword');
          }
          
       
          
          else
              {
                    var alertPopup = $ionicPopup.alert({
     
      template: 'Sorry,The security question and answer didnt match with the required email.Try again or contact the university Adminstration.'
    });
              }
       
      });
        
        
    }


      
});


App.controller('changepassword', function($scope, $http,$state,$ionicPopup) {
    
     var email = sessionStorage.getItem('femail');
    console.log(email);
    
    $scope.change=function(){
      
        
        password1= $scope.tpassword1;
         password2= $scope.tpassword2;
        if(password1==password2){
  
            // var Link = 'http://127.0.0.1:8080/myApp/teacher/change.php';
             var Link = 'http://40.65.178.216/ionic/myApp/Teacher/change.php';
      $http.post(Link, {email:email,password:password1}).then(function (res){
         $scope.question= res.data;
         console.log($scope.question);
          
          
          if($scope.question=="yup"){
              
               var alertPopup = $ionicPopup.alert({
     
      template: "The password is successfully changed. You can now login with your new password"
    });
           $state.go('teacherlogin');  
              
              
          }

           }); 
            
            
            
            
            
        }
        else
            {
                  var alertPopup = $ionicPopup.alert({
     
      template: "The password doesn't match"
    });
                
              
            }
        
    }
    
    
    
    
    
    
    
});



angular.module('starter.controllers',[])

App.controller('changeprofilepassword', function($scope, $http,$state,$ionicPopup) {
   
    $scope.back=function(){
        
        
        $state.go('teacherhome.profile')
    }
     // var Link = 'http://127.0.0.1:8080/myApp/teacher/security.php';
     var Link = 'http://40.65.178.216/ionic/myApp/Teacher/security.php';
      $http.post(Link, {}).then(function (res){
         $scope.question= res.data;
         console.log($scope.question);

           });
    
    
    $scope.data = {};
    
  
    $scope.continue = function(){
        
        
        
        
               
        var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
             
              var tid= sessionStorage.getItem('user');
    
        
      var question=$scope.data.question;
 
        var answer = $scope.data.answer;
             
        var     password1= $scope.data.password1;
        var  password2= $scope.data.password2;
             
                  if(password1==password2){
          console.log(password1);
              console.log(password2);
          //  var Link = 'http://127.0.0.1:8080/myApp/teacher/changeprofilepassword.php';
                       var Link = 'http://40.65.178.216/ionic/myApp/Teacher/changeprofilepassword.php';
      $http.post(Link, {tid:tid,question:question,answer:answer,password:password1}).then(function (res){
         $scope.result= res.data;
         console.log($scope.result);

          
          if($scope.result == "yup"){
              
              
                      var alertPopup = $ionicPopup.alert({
     
      template: "Password sucessfully changed"
    });
              
              
              
          }
          else{
              
                     var alertPopup = $ionicPopup.alert({
     
      template: "There was a problem changing your password.Check your fields and try again"
    });
          
              
              
              
          }

           });
            
            
            
        }
             
             else
                 
                 {
                     
                      var alertPopup = $ionicPopup.alert({
     
      template: "The password doesn't match. Try again"
    });
                     
                 }
    
        
             
             
             
             
             
             
             
             
             
            
         } else {
            console.log('Not sure!');
         }
      });
         
         
         
         
         
        
      
         
         
     
        
        

        
    }


      
});


App.controller('changepassword', function($scope, $http,$state,$ionicPopup) {
    
     var email = sessionStorage.getItem('femail');
    console.log(email);
    
    $scope.change=function(){
      
        
        password1= $scope.tpassword1;
         password2= $scope.tpassword2;
        if(password1==password2){
  
             //var Link = 'http://127.0.0.1:8080/myApp/teacher/change.php';
             var Link = 'http://40.65.178.216/ionic/myApp/Teacher/change.php';
      $http.post(Link, {email:email,password:password1}).then(function (res){
         $scope.question= res.data;
         console.log($scope.question);
          
          
          if($scope.question=="yup"){
              
               var alertPopup = $ionicPopup.alert({
     
      template: "The password is successfully changed. You can now login with your new password"
    });
           $state.go('teacherlogin');  
              
              
          }

           }); 
            
            
            
            
            
        }
        else
            {
                  var alertPopup = $ionicPopup.alert({
     
      template: "The password doesn't match"
    });
                
              
            }
        
    }
    
    
    
    
    
    
    
});