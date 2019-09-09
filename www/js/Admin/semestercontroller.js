angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('semestercontroller', function($scope, $http,$state,$ionicPopup) {
    
       // var ShowProglink = 'http://127.0.0.1:8080/myApp/admin/retrieveProgram.php';
       var ShowProglink = 'http://40.65.178.216/ionic/myApp/admin/retrieveProgram.php';
      $http.post(ShowProglink, {}).then(function (res){
         $scope.allprogfound = res.data;
         console.log($scope.allprogfound);

           });
       $scope.data = {};
    
    $scope.getbatch= function(){
        
        
        
        
         // var ShowProglink = 'http://127.0.0.1:8080/myApp/admin/batchsemester.php';
           var ShowProglink = 'http://40.65.178.216/ionic/myApp/admin/batchsemester.php';
          $http.post(ShowProglink, {program:$scope.data.program}).then(function (res){
         $scope.batch = res.data;
         console.log($scope.batch);

           });
    }
        
    $scope.getsemester= function(){
        
        
        
          // var Showsemesterlink = 'http://127.0.0.1:8080/myApp/admin/getsemester.php';
           var Showsemesterlink = 'http://40.65.178.216/ionic/myApp/admin/getsemester.php';
      $http.post(Showsemesterlink, {}).then(function (res){
         $scope.allsemfound = res.data;
         console.log($scope.allsemfound);

           });

    }
       $scope.assignsemester= function(){
           
           
                
        var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            
           
               //var Showsemesterlink = 'http://127.0.0.1:8080/myApp/admin/assignsemester.php';
                var Showsemesterlink = 'http://40.65.178.216/ionic/myApp/admin/assignsemester.php';
      $http.post(Showsemesterlink, {batchid:$scope.data.batch,semester:$scope.data.semester}).then(function (res){
         $scope.result = res.data;
         console.log($scope.result);
          if($scope.result==1){
                  var alertPopup = $ionicPopup.alert({
     
      template: 'Semester sucessfully added'
    });
              
              
          }
          else{
                 var alertPopup = $ionicPopup.alert({
     
      template: 'Please Check your fields and try again'
    });
           
              
          }

           });

             
            
         } else {
            console.log('Not sure!');
         }
      });
         
        
        
        
        

    }
    
   
    
});