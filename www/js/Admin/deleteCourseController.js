angular.module('starter.controllers',[])

App.controller('deleteCourseController', function($scope, $http,$state,$ionicPopup) {
   $scope.data = {};
   
    $scope.DeleteCourseBackButton = function(){
        
         $state.go('adminhome.course');
      };

   
       var ShowAllCourseLink = 'http://127.0.0.1:8080/myApp/admin/retrieveAllCourses.php';
      $http.post(ShowAllCourseLink, {}).then(function (res){
         $scope.allcoursefound = res.data;
         console.log($scope.allcoursefound);

           });
     $scope.Deletesubmit = function(){
         
         
              var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
             
                 var selectedCourse=$scope.data.course;
        console.log(selectedCourse);
          var link = 'http://127.0.0.1:8080/myApp/admin/deleteCourse.php';

 
          $http.post(link, {course : selectedCourse}).then(function (res){
         $scope.found = res.data;
          if($scope.found == "yes")
              {
                        var alertPopup = $ionicPopup.alert({
     
      template: 'course sucessfully deleted'
    });
              }
            else
              {
              
              alert("User doesn't exist");
              
               }

           });
        
             
            
         } else {
            console.log('Not sure!');
         }
      });


     
       
      };


      
});