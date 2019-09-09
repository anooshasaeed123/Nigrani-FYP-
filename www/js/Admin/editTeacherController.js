angular.module('starter.controllers',[])

App.controller('editTeacherController', function($scope, $http,$state,$ionicPopup) {
   $scope.data = {};
   
    $scope.editTeachertBackButton = function(){
        
         $state.go('editteacherselect');
      };

     var empid = sessionStorage.getItem('empid');
    console.log(empid);
    
     //  var link = 'http://127.0.0.1:8080/myApp/admin/edit/geteditteacher.php';
       var link = 'http://40.65.178.216/ionic/myApp/admin/edit/geteditteacher.php';
    
          $http.post(link, {id :empid}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
              
                  
                  
                console.log($scope.profile);
              
            
               
                   
            
 

       });
    
     $scope.updatecnic = function(){
           var empid = sessionStorage.getItem('empid');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var cnic=$scope.data.cnic;
     console.log(cnic);
    
    //  var link = 'http://127.0.0.1:8080/myApp/admin/edit/teachercnic.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/teachercnic.php';
    
          $http.post(link, {emp :empid,cnic:cnic}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Teacher sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
     
      $scope.updatefname = function(){
           var gid = sessionStorage.getItem('empid');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var fname=$scope.data.fname;
     console.log(fname);
    
    //  var link = 'http://127.0.0.1:8080/myApp/admin/edit/teacherfname.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/teacherfname.php';
    
          $http.post(link, {gid :gid,fname:fname}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Teacher sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
      $scope.updatelname = function(){
           var gid = sessionStorage.getItem('empid');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var lname=$scope.data.lname;
     console.log(lname);
    
  //    var link = 'http://127.0.0.1:8080/myApp/admin/edit/teacherlname.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/teacherlname.php';
    
          $http.post(link, {gid :gid,lname:lname}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Teacher sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
      $scope.updateemail = function(){
           var gid = sessionStorage.getItem('empid');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var email=$scope.data.email;
     console.log(email);
    
     // var link = 'http://127.0.0.1:8080/myApp/admin/edit/teacheremail.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/teacheremail.php';
    
          $http.post(link, {gid :gid,email:email}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Teacher sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
      
      
        $scope.updateaddress= function(){
           var gid = sessionStorage.getItem('empid');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var address=$scope.data.address;
     console.log(address);
    
      //var link = 'http://127.0.0.1:8080/myApp/admin/edit/teacheraddress.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/teacheraddress.php';
    
          $http.post(link, {gid :gid,address:address}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Teacher sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
          $scope.updatecontact= function(){
           var gid = sessionStorage.getItem('empid');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var contact=$scope.data.contact;
     console.log(contact);
    
     // var link = 'http://127.0.0.1:8080/myApp/admin/edit/teachercontact.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/teachercontact.php';
    
          $http.post(link, {gid :gid,contact:contact}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Teacher sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
          
                    $scope.updatedes= function(){
           var gid = sessionStorage.getItem('empid');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var des=$scope.data.des;
    
    
     // var link = 'http://127.0.0.1:8080/myApp/admin/edit/teacherdes.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/teacherdes.php';
    
          $http.post(link, {gid :gid,des:des}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Teacher sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
  
                                     $scope.updatequal= function(){
           var gid = sessionStorage.getItem('empid');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var qual=$scope.data.qual;
    
    
     // var link = 'http://127.0.0.1:8080/myApp/admin/edit/teacherqual.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/teacherqual.php';
    
          $http.post(link, {gid :gid,qual:qual}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Teacher sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
  
  
         


      
});