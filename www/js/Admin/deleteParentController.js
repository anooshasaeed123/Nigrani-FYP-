angular.module('starter.controllers',[])

App.controller('deleteParentctrl', function($scope, $http,$state) {
   $scope.data = {};
   
    $scope.DeleteParentBackButton = function(){
        
         $state.go('adminhome.parent');
      };

      //$scope.data ="hiiii";
     $scope.Deletesubmit = function(){

          var link = 'http://127.0.0.1:8080/myApp/admin/deleteParent.php';

 
          $http.post(link, {id : $scope.data.id}).then(function (res){
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