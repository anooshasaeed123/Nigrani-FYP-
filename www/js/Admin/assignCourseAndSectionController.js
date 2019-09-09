angular.module('starter.controllers',[])

App.controller('assignCourseAndSectionController', function($scope, $http,$state,$ionicPopup) {
$scope.data = {};

var ShowAllTeachersLink = 'http://40.65.178.216/ionic/myApp/admin/retrieveAllTeachers.php';
      $http.post(ShowAllTeachersLink, {}).then(function (res){
         $scope.allteacherfound = res.data;
         console.log($scope.allteacherfound);

           });

  // var link = 'http://localhost:8080/myApp/admin/getprogram.php';
       var link = 'http://40.65.178.216/ionic/myApp/admin/getprogram.php';
          $http.get(link).then(function(res){
              
          $scope.programs=res.data;
              
              console.log($scope.programs);
             
        
        
          });
    
    
        $scope.getbatch=function(){
          sessionStorage.setItem('cprogram',$scope.data.program);
      console.log($scope.data.program);
      // var link = 'http://127.0.0.1:8080/myApp/admin/Batch.php';
               var link = 'http://40.65.178.216/ionic/myApp/admin/batch.php';
      $http.post(link, {program:$scope.data.program}).then(function (res){
         $scope.allbatchfound = res.data;
         console.log($scope.allbatchfound);

           });
      
      
      
  }
        
        
                
        $scope.getsemester=function(){
            
            var program=sessionStorage.getItem('cprogram');
            sessionStorage.setItem('cbatch',$scope.data.batch);
            
             
    
      // var link = 'http://127.0.0.1:8080/myApp/admin/Semester.php';
               var link = 'http://40.65.178.216/ionic/myApp/admin/Semester.php';
      $http.post(link, {batch:$scope.data.batch,program:program}).then(function (res){
         $scope.allsemfound = res.data;
         console.log($scope.allsemfound);

           });

      
      
      
      
  }
        
                $scope.getcourse=function(){
            
            var program=sessionStorage.getItem('cprogram');
            var batch = sessionStorage.getItem('cbatch');
            sessionStorage.setItem('csemester',$scope.data.semester);
            console.log($scope.data.semester);
           
             
    
     //  var link = 'http://127.0.0.1:8080/myApp/admin/courseandsection.php';\
                       var link = 'http://40.65.178.216/ionic/myApp/admin/courseandsection.php';
      $http.post(link, {batch:batch,program:program,semester:$scope.data.semester}).then(function (res){
         $scope.course = res.data;
         console.log($scope.course);

           });

      
      
      
      
  }
                
                
                  $scope.savecourse=function(x){
            
            sessionStorage.setItem('coursesecid',$scope.data.course);
          
            
            
           
            
            
            
        }
                  
                        $scope.getteacher=function(x){
            
            sessionStorage.setItem('courseteacher',$scope.data.teacher);
          
            
            
           
            
            
            
        }
     
     
     
    
      
   
    $scope.assignCourseAndSectionBackButton = function(){
        
         $state.go('adminhome.teacher');
      };

      //$scope.data ="hiiii";
     $scope.assignSubmit = function(){
       var coursesecid=sessionStorage.getItem('coursesecid');
         
         console.log(coursesecid);
       var teacher=  sessionStorage.getItem('courseteacher');
         
         console.log(teacher);


              
        var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
                //  var link = 'http://127.0.0.1:8080/myApp/admin/assignCourse.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/assignCourse.php';

 
        $http.post(link, {coursesecid:coursesecid,teacherid:teacher  }).then(function (res){
         $scope.found = res.data;
            
            console.log($scope.found);
            if($scope.found = "yup")
              {
               var alertPopup = $ionicPopup.alert({
     
      template: 'Sucessfully assigned'
    });
                  delete $sessionStorage;
              }
              else
              {
            alert("There was an error assigning course.Kindly check your fields and try again.");
                   delete $sessionStorage;
              }

           });
             
            
         } else {
            console.log('Not sure!');
         }
      });
         
      };


      
});