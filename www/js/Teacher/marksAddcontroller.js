angular.module('starter.controllers',[])

App.controller('marksAddcontroller', function($scope, $http,$state,$stateParams,$ionicPopup) {

 $scope.data = {};
    
    //var testid = $stateParams.testid;
       var testid = sessionStorage.getItem('Mtestid');
    
   var userid = sessionStorage.getItem('user');

    
  
    
    
    
    
   //   var link = 'http://localhost:8080/myApp/Teacher/Listteststudents.php';
     var link = 'http://40.65.178.216/ionic/myApp/Teacher/listteststudents.php';
    
               $http.post(link, {testid:testid}).then(function (res){
                   
                 
    
                 console.log(res.data);
                   $scope.students=res.data;
                   
                   sessionStorage.setItem('Mtotmarks',$scope.students[0].totmarks);
                   
                   
                   
                   
                   
                
                   
                  
                
                   
                   
                   
                   

                   
            
 

       });
    
     $scope.addmarks=function(data,obmarks){
          var userid = sessionStorage.getItem('user');
         
       //  var marks = data.marks;
        var rollnumber = data.rollnumber;
     // var obmarks= obmarks;
      //var status= status;
       
         var program= sessionStorage.getItem('Mprogram');
          var semester= sessionStorage.getItem('Msemester');
          var batch= sessionStorage.getItem('Mbatch');
         var section= sessionStorage.getItem('Msection');
           var course= sessionStorage.getItem('Mcourse'); 
          var testid = sessionStorage.getItem('Mtestid');
            var totmarks=sessionStorage.getItem('Mtotmarks');
         var weightage=data.weightage;
   
         
         var obweightage = (obmarks/totmarks)*weightage;
        
         
         var pass_status = (weightage/2);
         
         if(obweightage>=pass_status){
             
             
             status='pass';
         }
         else
             
             {
                 status='fail';
             }
         
         console.log(status);
         
         
     
         
       
       
        
      
       
          
         
      
         
             
               var marks = [
  {rollnumber:rollnumber
   , status: status,
   section:section,
   batch:batch,
   totmarks:totmarks,
   obmarks:obmarks,
    program:program,
   semester:semester,
   testid:testid,
   course:course,
   obweightage:obweightage
  }
 
];
       //  console.log(marks);
        
         
       
         
               //var link = 'http://localhost:8080/myApp/Teacher/addmarks.php';
          var link = 'http://40.65.178.216/ionic/myApp/Teacher/addmarks.php';
    
               $http.post(link, {user_id : userid,marks:marks}).then(function (res){
                   
                   console.log(res.data);
                   
                 
    
                   var alertPopup = $ionicPopup.alert({
     
      template: 'Marks sucessfully added'
    });
                   
                   
                   
                   
                
                   
                  
                
                   
                   
                   
                   

                   
            
 

       });
         
         
         
         
         
         
     };
    
    
    
    

    
    

      
});



App.controller('marksupdatecontroller', function($scope, $http,$state,$stateParams,$ionicPopup) {
    
    
      var testid = sessionStorage.getItem('Mtestid');
    
   var userid = sessionStorage.getItem('user');

    
  
    
    
    
    
     // var link = 'http://localhost:8080/myApp/Teacher/Listteststudents.php';
     var link = 'http://40.65.178.216/ionic/myApp/Teacher/listteststudents.php';
    
               $http.post(link, {testid:testid}).then(function (res){
                   
                 
    
                 console.log(res.data);
                   $scope.students=res.data;
                   
               });
    
    $scope.updatemarks = function(x,status,obmarks){
         var test= sessionStorage.getItem('Mtestid');
        console.log(x.rollnumber);
        var rollnumber=x.rollnumber;
        
        
       //  var link = 'http://localhost:8080/myApp/Teacher/updatemarks.php';
         var link = 'http://40.65.178.216/ionic/myApp/Teacher/updatemarks.php';
    
               $http.post(link, {testid:test,status:status,marks:obmarks,rollnumber:rollnumber}).then(function (res){
                   
                 
    
                 console.log(res.data);
                   $scope.students1=res.data;
                   
                   if(res.data==1){
                       
                       
                   var alertPopup = $ionicPopup.alert({
     
      template: 'Marks sucessfully updated'
    });
                       
                       
                   }
                   else{
                       
                                 var alertPopup = $ionicPopup.alert({
     
      template: 'Please enter the updated marks in the field '
    });
                       
                       
                   }
                   
               });
        
     
        
        
    }

    
    
    
});