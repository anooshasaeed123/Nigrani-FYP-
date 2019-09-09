angular.module('starter.controllers',[])

App.controller('deleteTeacherController', function($scope, $http,$state) {
   $scope.data = {};
   
    $scope.DeleteTeacherBackButton = function(){
        
         $state.go('adminhome.teacher');
      };

      //$scope.data ="hiiii";
     $scope.Deletesubmit = function(){

          var link = 'http://127.0.0.1:8080/myApp/admin/deleteTeacher.php';

 
          $http.post(link, {cnic : $scope.data.CNIC}).then(function (res){
         $scope.found = res.data;
          if($scope.found == "yes")
              {
            alert("deleted");
              }
            else
              {
              
              alert("User doesn't exist");
              
               }

           });
         //$state.go('adminhome.parent');
      };


      
});