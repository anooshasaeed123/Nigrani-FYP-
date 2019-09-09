angular.module('starter.controllers',[])

App.controller('parentcontroller', function($scope, $http,$state) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.addparent1 = function(){
        $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
         
             $state.go('addparent');
             
        
      };
      
      $scope.Deleteparent=function(){
        $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
        $state.go('deleteparent');
      };
      $scope.editparent=function(){
        $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
        $state.go('adminhome.selecteditparent');
      };
      //  $scope.editparent=function(){
      //   $state.go('deleteparent');
      // };
});
App.controller('challanController', function($scope, $http,$state) {
   $scope.data = {};

var ShowProglink = 'http://127.0.0.1:8080/myApp/admin/retrieveProgram.php';
      $http.post(ShowProglink, {}).then(function (res){
         $scope.allprogfound = res.data;
         console.log($scope.allprogfound);

           });
var Showbatchlink = 'http://127.0.0.1:8080/myApp/admin/retrieveBatch.php';
      $http.post(Showbatchlink, {}).then(function (res){
         $scope.allbatchfound = res.data;
         console.log($scope.allbatchfound);

           });      

var Showsemesterlink = 'http://127.0.0.1:8080/myApp/admin/retrieveSem.php';
      $http.post(Showsemesterlink, {}).then(function (res){
         $scope.allsemfound = res.data;
         console.log($scope.allsemfound);

           });


      //$scope.data ="hiiii";
     $scope.issue = function(){
      $scope.sessionAdminId = sessionStorage.getItem('adminId');
      console.log($scope.sessionAdminId);
       var selectedBatch=$scope.data.batch;
       console.log(selectedBatch);
       var selectedProg=$scope.data.program;
      console.log(selectedProg);
      var selectedSemester=$scope.data.yesSemester;
      console.log(selectedSemester);
        
  sessionStorage.setItem('proggid',selectedProg);
  sessionStorage.setItem('batchid',selectedBatch);
  sessionStorage.setItem('semid',selectedSemester);


         
      $state.go('issueChallan');
             
        
      };
      
      
});
App.controller('courseController', function($scope, $http,$state) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.addCourse = function(){
        $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
         
             $state.go('addcourse');
             
        
      };
      
      $scope.deleteCourse=function(){
        $state.go('deletecourse');
      };

      $scope.AssignSectionsToCourses=function(){
        $state.go('assignsectionstocourse');
      };
      
      
});
App.controller('teaacherController', function($scope, $http,$state,$ionicPopup) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.addTeacer = function(){
        $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
         
             $state.go('addteacher');
             
        
      };
    $scope.BackButton=function(){
        $state.go('adminhome.teacher');
        
        
    };
      $scope.editTeacherselect=function(){
      var empid=$scope.data.eid;
          console.log(empid);
          
    
      // var link = 'http://127.0.0.1:8080/myApp/admin/edit/geteditteacher.php';
             var link = 'http://40.65.178.216/ionic/myApp/admin/edit/geteditteacher.php';
    
          $http.post(link, {id :empid}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
              
                       if ($scope.profile.length==0){
             
              var alertPopup = $ionicPopup.alert({
     
      template: 'Employee ID doesnt exist'
    });
         }
              else {
                  
                    sessionStorage.setItem('empid',empid);
        $state.go('editteacher');
                 
              }
            
          
          });
          
          
        
      };
      
      $scope.editTeacher=function(){
        $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
        $state.go('editteacherselect');
      };
      $scope.assignCourseAndSection=function(){
        $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
        $state.go('assignsectionTeacher');
      };
      $scope.deleteTeacher=function(){
        $state.go('deleteteacher');
      };
      //  $scope.editparent=function(){
      //   $state.go('deleteparent');
      // };
});
App.controller('studentController', function($scope, $http,$state,$ionicPopup) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.addStudent = function(){
        $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
         
             $state.go('addStudent');
     
      };
    
        $scope.BackButton = function(){
            
               $state.go('adminhome.student');
            
            
        }
        
        

    
     $scope.edit= function(){
      var $rollnumber=$scope.data.rollnumber;
         console.log($rollnumber);
      
               var sid = $rollnumber
    console.log(sid);
    
     // var link = 'http://127.0.0.1:8080/myApp/admin/geteditStudent.php';
            var link = 'http://40.65.178.216/ionic/myApp/admin/geteditStudent.php';
    
          $http.post(link, {sid :sid}).then(function (res){
                   
                 
    
                   $scope.profile=res.data;
                  
                      if ($scope.profile.length==0){
             
              var alertPopup = $ionicPopup.alert({
     
      template: 'Rollnumber doesnt exist'
    });
         }
              else {
                    sessionStorage.setItem('editrollnumber',$rollnumber);
                  
                   $state.go('editStudent');
              }
            
               
                   
            
 

       });
         
         
         
         
         
         
        
     
      };
      $scope.editStudent = function(){
        $scope.sessionAdminId = sessionStorage.getItem('adminId');
          console.log($scope.sessionAdminId);
         
             $state.go('editStudentselect');
     
      };
      $scope.deleteStudent = function(){
        
         
             $state.go('deleteStudent');
     
      };
      
    
     
});
App.controller('adminLogout', function($scope, $http,$state) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.logoutfromAdminHomePage = function(){
        
         sessionStorage.clear();
             $state.go('page1');
             
        
      };
});