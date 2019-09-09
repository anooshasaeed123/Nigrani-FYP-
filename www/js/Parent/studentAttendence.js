angular.module('starter.controllers',[])

App.controller('studentAttendence', function($scope, $http,$state) {
   $scope.data = {};
 $scope.sessiondata = sessionStorage.getItem('parentId');
$scope.data = {};
        // var link = 'http://localhost:8080/myApp/parent/retrieveStudents.php';
    
        var link = 'http://40.65.178.216/ionic/myApp/parent/retrieveStudents.php';
         $http.post(link, {id : $scope.sessiondata}).then(function (res){
          $scope.found = res.data;
          console.log($scope.found);
          
          });
    
    
    
    $scope.view=function(x){
        
        console.log(x.stdid);
        sessionStorage.setItem('stid',x.stdid);
       $state.go('parenthome.attendencecourseselect');
        
    }

});
App.controller('attendenceshowCourse', function($scope, $http,$state) {
$scope.selectCourseBack=function(){
  
 
 $state.go('parenthome.result');
 };  
 $scope.data = {};

$scope.studentsessiondata = sessionStorage.getItem('stid');
console.log($scope.studentsessiondata);
//var courseLink = 'http://localhost:8080/myApp/parent/retrieveCourses.php';
      var courseLink = 'http://40.65.178.216/ionic/myApp/parent/retrieveCourses.php';
 $http.post(courseLink, {cid : $scope.studentsessiondata}).then(function (cres){
          $scope.courseFound = cres.data;
          console.log($scope.courseFound);
          
          
          });
 $scope.view= function(x){
     console.log(x.course_id)
      sessionStorage.setItem('attcourseId',x.course_id);
  $state.go('parenthome.pviewattendence');
  
 }
});

App.controller('attendenceview', function($scope, $http,$state) {

 var cid = sessionStorage.getItem('attcourseId');
var stid=sessionStorage.getItem('stid');
   // var courseLink = 'http://localhost:8080/myApp/parent/pviewattendence.php';
      var courseLink = 'http://40.65.178.216/ionic/myApp/parent/pviewattendence.php';
 $http.post(courseLink, {cid : cid,stid:stid}).then(function (cres){
          $scope.attendence = cres.data;
          console.log($scope.attendence);
          
          
          });


});
