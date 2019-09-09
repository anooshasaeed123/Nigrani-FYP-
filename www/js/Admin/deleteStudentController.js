angular.module('starter.controllers',[])

App.controller('deleteStudentController', function($scope, $http,$state) {
   $scope.data = {};
   
    $scope.DeleteStudentBackButton = function(){
        
         $state.go('adminhome.student');
      };

      //$scope.data ="hiiii";
     $scope.Deletesubmit = function(){

          var link = 'http://127.0.0.1:8080/myApp/admin/deleteStudent.php';

          $http.post(link, {rollnumber : $scope.data.rollnumber}).then(function (res){
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