angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('batchcontroller', function($scope, $http,$state,$ionicPopup) {
    
     
          //var Showbatchlink = 'http://127.0.0.1:8080/myApp/admin/getbatch.php';
       var Showbatchlink = 'http://40.65.178.216/ionic/myApp/admin/getbatch.php';
          $http.get(Showbatchlink).then(function (res){
         $scope.batch1 = res.data;
         console.log($scope.batch1);

           });
    
       // var ShowProglink = 'http://127.0.0.1:8080/myApp/admin/retrieveProgram.php';
       var ShowProglink = 'http://40.65.178.216/ionic/myApp/admin/retrieveProgram.php';
      $http.post(ShowProglink, {}).then(function (res){
         $scope.allprogfound = res.data;
         console.log($scope.allprogfound);

           });
       $scope.data = {};
    
    $scope.addbatch=function(){
        
        
             var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
              var program=$scope.data.program;
        var batch = $scope.data.batchName;
        
        console.log($scope.data.program);
        console.log($scope.data.batchName);  
        
        
        //var link = 'http://127.0.0.1:8080/myApp/admin/addbatch.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/addbatch.php';
      $http.post(link, {program:program,batch:batch}).then(function (res){
         $scope.batch = res.data;
         console.log($scope.batch);
          
          if($scope.batch==" 11"){
               var alertPopup = $ionicPopup.alert({
     
      template: 'Batch sucessfully added'
    });
              
              
          }
          
          else{
              
               var alertPopup = $ionicPopup.alert({
     
      template: 'There was a problem adding the batch. Kindly check your fields and try again'
    });
          }

           });
             
            
         } else {
            console.log('Not sure!');
         }
      });
         
         
        
   
        
        
        
        
        
    }
       
         $scope.data = {};
                           
            $scope.assignbatch= function(){
                
                    
                
        var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
             
             console.log($scope.data.program1);
             console.log($scope.data.batch1);
            
           
              //var Showsemesterlink = 'http://127.0.0.1:8080/myApp/admin/edit/assignbatch.php';
                var Showsemesterlink = 'http://40.65.178.216/ionic/myApp/admin/edit/assignbatch.php';
      $http.post(Showsemesterlink, {batchid:$scope.data.batch1,program:$scope.data.program1}).then(function (res){
         $scope.result = res.data;
         console.log($scope.result);
          if($scope.result==1){
                  var alertPopup = $ionicPopup.alert({
     
      template: 'Batch sucessfully assigned'
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



App.controller('programcontroller', function($scope, $http,$state,$ionicPopup) {
       $scope.data = {};
        $scope.addprogram= function(){
            
            
               var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
             
           
             
            var program = $scope.data.program;
            
                      var link = 'http://40.65.178.216/ionic/myApp/admin/addprogram.php';
      $http.post(link, {program:program}).then(function (res){
              $scope.result = res.data;
         console.log($scope.result);
          if($scope.result==1){
                  var alertPopup = $ionicPopup.alert({
     
      template: 'Program added'
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
            
//            
//            var program = $scope.data.program;
//            
//                      var link = 'http://40.65.178.216/ionic/myApp/admin/addprogram.php';
//      $http.post(link, {program:program}).then(function (res){
//              $scope.result = res.data;
//         console.log($scope.result);
//          
//      });
            
    
            
            
        };
    
    
    
    
});