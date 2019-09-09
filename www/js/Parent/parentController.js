angular.module('starter.controllers',[])

App.controller('parentLogout', function($scope, $http,$state) {
   $scope.data = {};
      //$scope.data ="hiiii";
     $scope.logoutfromParentHomePage = function(){
        
         sessionStorage.clear();
             $state.go('page1');
             
        
      };
});
App.controller('ShowStudents', function($scope, $http,$state) {
$scope.sessiondata = sessionStorage.getItem('parentId');

console.log($scope.sessiondata);
$scope.data = {};
        // var link = 'http://localhost:8080/myApp/parent/retrieveStudents.php';
    
      var link = 'http://40.65.178.216/ionic/myApp/parent/retrieveStudents.php';
        
         $http.post(link, {id : $scope.sessiondata}).then(function (res){
          $scope.found = res.data;
          console.log($scope.found);
          
          });
         // $http.post(courseLink, {cid : $scope.sessiondata}).then(function (res){
         //  $scope.courseFound = res.data;
         //  console.log($scope.courseFound);
          
         //  });

 $scope.goChallan=function(){
 	
 var selectedStudentId=$scope.data.studentid;

 sessionStorage.setItem('studentId',selectedStudentId);

 // $scope.studentsessiondata = sessionStorage.getItem('studentId');
 //this could also work//console.log(selectedStudentId.stdid);
//console.log(selectedStudentId);

 $state.go('challanGo');
 };  
$scope.goCourse=function(){
  
 var selectedStudentId=$scope.data.studentid;
 // var selectedCourseId=$scope.data.courseid;
 sessionStorage.setItem('studentId',selectedStudentId);
 // sessionStorage.setItem('courseId',selectedCourseId);
 $state.go('courseGo');
 };  

});
App.controller('showCourse', function($scope, $http,$state) {
$scope.selectCourseBack=function(){
  
 
 $state.go('parenthome.result');
 };  
 $scope.data = {};

$scope.studentsessiondata = sessionStorage.getItem('studentId');
console.log($scope.studentsessiondata);
var courseLink = 'http://40.65.178.216/ionic/myApp/parent/retrieveCourses.php';
    
    
 $http.post(courseLink, {cid : $scope.studentsessiondata}).then(function (cres){
          $scope.courseFound = cres.data;
          console.log($scope.courseFound);
          
          
          });
 $scope.goResult= function(){
  $state.go('resultGo');
  var selectedCourseId=$scope.data.courseid;
  sessionStorage.setItem('yocourseId',selectedCourseId);
 }
});

