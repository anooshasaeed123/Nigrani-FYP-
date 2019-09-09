angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('studentChallan', function($scope, $http,$state) {

  $scope.loadMore = function() {
    $http.get('/more-items').success(function(items) {
      useItems(items);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

   $scope.studentChallanBack= function(){
        
         
           $state.go('parenthome.challan');

             
        
      };
      

   $scope.data = {};
    

         var link = 'http://localhost:8080/myApp/parent/showChallanOfSelectedStudent.php';

 $scope.studentsessiondata = sessionStorage.getItem('studentId');
 console.log($scope.studentsessiondata);

         $http.post(link, {studentid : $scope.studentsessiondata}).then(function (res){
         
          $scope.found = res.data;
          console.log($scope.found);
          });
    


      
});