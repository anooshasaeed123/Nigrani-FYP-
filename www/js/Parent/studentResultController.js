angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('studentResult', function($scope, $http,$state) {

  // $scope.loadMore = function() {
  //   $http.get('/more-items').success(function(items) {
  //     useItems(items);
  //     $scope.$broadcast('scroll.infiniteScrollComplete');
  //   });
  // };

   $scope.studentResultBack= function(){
        
         
           $state.go('courseGo');

             
        
      };
      

   $scope.data = {};
    
//var link = 'http://localhost:8080/myApp/parent/showResultOfSelectedStudent.php';
      var link = 'http://40.65.178.216/ionic/myApp/parent/showResultOfSelectedStudent.php';
 $scope.studentsessiondata = sessionStorage.getItem('studentId');
 $scope.coursesessiondata = sessionStorage.getItem('yocourseId');
 console.log($scope.studentsessiondata);
 console.log($scope.coursesessiondata);

$http.post(link, {studentid : $scope.studentsessiondata,courseid: $scope.coursesessiondata}).then(function (res){
         
          $scope.found = res.data;
           console.log($scope.found);
           });
    


      
});