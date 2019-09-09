angular.module('starter.controllers',[])

App.controller('editParentController', function($scope, $http,$state,$ionicPopup) {
   $scope.data = {};
       $scope.editParentBackButton = function(){
        
         $state.go('adminhome.selecteditparent');
      };

      var gid = sessionStorage.getItem('gid');
    console.log(gid);
    
   //   var link = 'http://127.0.0.1:8080/myApp/admin/geteditParent.php';
       var link = 'http://40.65.178.216/ionic/myApp/admin/geteditparent.php';
    
          $http.post(link, {gid :gid}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
              //console.log($scope.profile[0].fname);
                if ($scope.profile.length==0){
             
              var alertPopup = $ionicPopup.alert({
     
      template: 'Guardian ID doesnt exist'
    });
         }
              else {
                  
                  
                   console.log($scope.profile);
              }
            
               
                   
            
 

       });
    
   
 $scope.updatecnic = function(){
           var gid = sessionStorage.getItem('gid');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var cnic=$scope.data.cnic;
     console.log(cnic);
    
    //  var link = 'http://127.0.0.1:8080/myApp/admin/edit/parentcnic.php';
               var link = 'http://40.65.178.216/ionic/myApp/admin/edit/parentcnic.php';
             
    
          $http.post(link, {gid :gid,cnic:cnic}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Parent sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
 
  $scope.updatefname = function(){
           var gid = sessionStorage.getItem('gid');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var fname=$scope.data.fname;
     console.log(fname);
    
     // var link = 'http://127.0.0.1:8080/myApp/admin/edit/parentfname.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/parentfname.php';
    
          $http.post(link, {gid :gid,fname:fname}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Parent sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
  
    $scope.updatelname = function(){
           var gid = sessionStorage.getItem('gid');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var lname=$scope.data.lname;
     console.log(lname);
    
    //  var link = 'http://127.0.0.1:8080/myApp/admin/edit/parentlname.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/parentlname.php';
    
          $http.post(link, {gid :gid,lname:lname}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Parent sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
    
     
    $scope.updateemail = function(){
           var gid = sessionStorage.getItem('gid');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var email=$scope.data.email;
     console.log(email);
    
    //  var link = 'http://127.0.0.1:8080/myApp/admin/edit/parentemail.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/parentemail.php';
    
          $http.post(link, {gid :gid,email:email}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Parent sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
         
    $scope.updatepass= function(){
           var gid = sessionStorage.getItem('gid');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var pass=$scope.data.password;
     console.log(pass);
    
     // var link = 'http://127.0.0.1:8080/myApp/admin/edit/parentpass.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/parentpass.php';
    
          $http.post(link, {gid :gid,pass:pass}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Parent sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
    
        $scope.updateaddress= function(){
           var gid = sessionStorage.getItem('gid');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var address=$scope.data.address;
     console.log(address);
    
    //  var link = 'http://127.0.0.1:8080/myApp/admin/edit/parentaddress.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/parentaddress.php';
    
          $http.post(link, {gid :gid,address:address}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Parent sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
          $scope.updatecontact= function(){
           var gid = sessionStorage.getItem('gid');
     
          var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            var contact=$scope.data.contact;
     console.log(contact);
    
    //  var link = 'http://127.0.0.1:8080/myApp/admin/edit/parentcontact.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/edit/parentcontact.php';
    
          $http.post(link, {gid :gid,contact:contact}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                
             
                   
            
 

       });
              var alertPopup = $ionicPopup.alert({
     
      template: 'Parent sucessfully edited'
    });
             
            
         } else {
            console.log('Not sure!');
         }
      });
     

    
     
     
     
 }
  
  
 
 
 
    
   
 
    //  $scope.data ="hiiii";
     $scope.editParentSubmit = function(){

         // var link = 'http://127.0.0.1:8080/myApp/admin/editParent.php';
            var link = 'http://40.65.178.216/ionic/myApp/admin/editParent.php';
          $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
         

// 
//         $http.post(link, {adminID : $scope.sessionAdminId, fname : $scope.data.editparentFirstname, lname : $scope.data.editparentLastname, email : $scope.data.editparentEmail, password : $scope.data.editparentPassword,
//          username : $scope.data.editparentUsername, cnic : $scope.data.editparentCNIC,
//          address : $scope.data.editparentAddress, contactno : $scope.data.editparentContactNumber}).then(function (res){
//            
//               $scope.found = res.data;
//           if($scope.found == "yes")
//              {
//             alert("updated");
//               }
//            else
//              {
//              
//              alert("this User doesn't exist");
//              
//               }
//
//          });
//       //  $state.go('adminhome.parent');
      };


      
});

App.controller('editParent', function($scope, $http,$state,$ionicPopup) {
   $scope.data = {};
   
    $scope.BackButton = function(){
        
         $state.go('adminhome.parent');
      };
    $scope.edit = function(){
          var gid =  $scope.data.gid;
        
        //var link = 'http://127.0.0.1:8080/myApp/admin/geteditParent.php';
           var link = 'http://40.65.178.216/ionic/myApp/admin/geteditparent.php';
    
          $http.post(link, {gid :gid}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
              //console.log($scope.profile[0].fname);
                if ($scope.profile.length==0){
             
              var alertPopup = $ionicPopup.alert({
     
      template: 'Guardian ID doesnt exist'
    });
         }
              else {
                  
                  
                  sessionStorage.setItem('gid',gid);
        $state.go('editparent');
              }
            
               
                   
            
 

       });
    
   
        
        
        
        
        
   
        
        
    }


    
     



      
});