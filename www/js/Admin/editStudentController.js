angular.module('starter.controllers',[])

App.controller('editStudentController', function($scope, $http,$state,$ionicPopup,$filter) {
   $scope.data = {};
   
    $scope.editStudentBackButton = function(){
        
         $state.go('editStudentselect');
        
        
      };
    
    
    
      var sid =  sessionStorage.getItem('editrollnumber');
    console.log(sid);
    
     // var link = 'http://127.0.0.1:8080/myApp/admin/geteditStudent.php';
       var link = 'http://40.65.178.216/ionic/myApp/admin/geteditStudent.php';
    
          $http.post(link, {sid :sid}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                  
               
         console.log($scope.profile);
              
            
               
                   
            
 

       });

 $scope.updatecnic = function(){
           var sid = sessionStorage.getItem('editrollnumber');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var cnic=$scope.data.cnic;
     console.log(cnic);
    
    //  var link = 'http://127.0.0.1:8080/myApp/admin/edit/studentcnic.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/studentcnic.php';
    
          $http.post(link, {sid :sid,cnic:cnic}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Student sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
 
 
  
  $scope.updatefname = function(){
           var sid = sessionStorage.getItem('editrollnumber');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var fname=$scope.data.fname;
     console.log(fname);
    
    //  var link = 'http://127.0.0.1:8080/myApp/admin/edit/studentfname.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/studentfname.php';
    
          $http.post(link, {sid :sid,fname:fname}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Student sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
  
    
  $scope.updatelname = function(){
           var sid = sessionStorage.getItem('editrollnumber');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var lname=$scope.data.lname;
 
    
     // var link = 'http://127.0.0.1:8080/myApp/admin/edit/studentlname.php';
             
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/studentlname.php';
    
          $http.post(link, {sid :sid,lname:lname}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Student sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
  
       
    $scope.updateemail = function(){
           var sid = sessionStorage.getItem('editrollnumber');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var email=$scope.data.email;
     console.log(email);
    
  //    var link = 'http://127.0.0.1:8080/myApp/admin/edit/studentemail.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/studentemail.php';
    
          $http.post(link, {sid:sid,email:email}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Student sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
    
    
           $scope.updateaddress= function(){
           var sid = sessionStorage.getItem('editrollnumber');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var address=$scope.data.address;
     console.log(address);
    
    //  var link = 'http://127.0.0.1:8080/myApp/admin/edit/studentaddress.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/studentaddress.php';
    
          $http.post(link, {sid:sid,address:address}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Student sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
           
                      $scope.updategender= function(){
           var sid = sessionStorage.getItem('editrollnumber');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var gender=$scope.data.gender;
   
    
     // var link = 'http://127.0.0.1:8080/myApp/admin/edit/studentgender.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/studentgender.php';
    
          $http.post(link, {sid:sid,gender:gender}).then(function (res){
                   
                 
    
                   $scope.gender=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Student sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
   
                      
           
                      $scope.updatedob= function(){
           var sid = sessionStorage.getItem('editrollnumber');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
           
               var  dob= $filter('date')($scope.data.dueDate, "dd/MM/yyyy");
   
    
   //   var link = 'http://127.0.0.1:8080/myApp/admin/edit/studentdob.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/studentdob.php';
    
          $http.post(link, {sid:sid,dob:dob}).then(function (res){
                   
                 
    
                   $scope.date=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Student sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
   
   
  
  

      
});