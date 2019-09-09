angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('assigncourse', function($scope, $http,$state,$ionicPopup) {
    
    
   var student= sessionStorage.getItem('rollnumber');
    console.log(student);
    
     // var link = 'http://localhost:8080/myApp/admin/getstudent.php';
       var link = 'http://40.65.178.216/ionic/myApp/admin/getstudent.php';
         $http.post(link, {rollnumber:student}).then(function (res){
              
          $scope.student=res.data;
              
              console.log($scope.student[0].id);
             
             sessionStorage.setItem('studentid',$scope.student[0].id);
             
        
        
          });
    
    


   //var link = 'http://localhost:8080/myApp/admin/getprogram.php';
       var link = 'http://40.65.178.216/ionic/myApp/admin/getprogram.php';
          $http.get(link).then(function(res){
              
          $scope.programs=res.data;
              
              console.log($scope.programs);
             
        
        
          });
    
    
         $scope.getbatch=function(){
          sessionStorage.setItem('cprogram',$scope.data.program);
      console.log($scope.data.program);
      // var Showbatchlink = 'http://127.0.0.1:8080/myApp/admin/Batch.php';
                var Showbatchlink = 'http://40.65.178.216/ionic/myApp/admin/batch.php';
      $http.post(Showbatchlink, {program:$scope.data.program}).then(function (res){
         $scope.allbatchfound = res.data;
         console.log($scope.allbatchfound);

           });
      
      
      
  }
         
              
        $scope.getsemester=function(){
            
            var program=sessionStorage.getItem('cprogram');
            sessionStorage.setItem('cbatch',$scope.data.batch);
            
             
    
      // var Showsemesterlink = 'http://127.0.0.1:8080/myApp/admin/Semester.php';
               var Showsemesterlink = 'http://40.65.178.216/ionic/myApp/admin/Semester.php';
      $http.post(Showsemesterlink, {batch:$scope.data.batch,program:program}).then(function (res){
         $scope.allsemfound = res.data;
         console.log($scope.allsemfound);

           });

      
      
      
      
  }
        
        
                  
        $scope.getcourse=function(){
            
            var program=sessionStorage.getItem('cprogram');
            var batch = sessionStorage.getItem('cbatch');
            sessionStorage.setItem('csemester',$scope.data.semester);
            console.log($scope.data.semester);
           
             
    
      // var Showsemesterlink = 'http://127.0.0.1:8080/myApp/admin/courseandsection.php';
               var Showsemesterlink = 'http://40.65.178.216/ionic/myApp/admin/courseandsection.php';
      $http.post(Showsemesterlink, {batch:batch,program:program,semester:$scope.data.semester}).then(function (res){
         $scope.course = res.data;
         console.log($scope.course);

           });

      
      
      
      
  }
        
        $scope.savecourse=function(x){
            
            sessionStorage.setItem('coursesecid',$scope.data.course);
          
            
            
           
            
            
            
        }
        
        
        $scope.assign = function (){
               var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
                   
            var coursesecid=sessionStorage.getItem('coursesecid');
              var program=sessionStorage.getItem('cprogram');
            var batch = sessionStorage.getItem('cbatch');
            var semester =   sessionStorage.getItem('csemester');
            var student= sessionStorage.getItem('rollnumber');
             var sid=sessionStorage.getItem('studentid');
            
            console.log(sid);
            
            
                //var link = 'http://127.0.0.1:8080/myApp/admin/courseandsectionassign.php';
               var link = 'http://40.65.178.216/ionic/myApp/admin/courseandsectionassign.php';
      $http.post(link, {coursesecid:coursesecid,sid:sid}).then(function (res){
         $scope.course = res.data;
         console.log($scope.course);

          
            if($scope.course == " yes")
              {
               var alertPopup = $ionicPopup.alert({
     
      template: 'Sucessfully assigned'
    });
                  delete $sessionStorage;
              }
              else
              {
                  
                         var alertPopup = $ionicPopup.alert({
     
      template: 'There was an error assigning course.Kindly check your fields and try again.'
    });
           
                   delete $sessionStorage;
              }

           });
             
            
         } else {
            console.log('Not sure!');
         }
      });
            
            
            
            
            
            
            
        
            
           
           
            
            
        }        


  
   
});