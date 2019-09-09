angular.module('starter.controllers',[])

App.controller('viewAttendence', function($scope, $http,$state,attendence){
    

          var cid=sessionStorage.getItem('cid');
    
        var date= sessionStorage.getItem('date');
      // var link = 'http://localhost:8080/myApp/Teacher/getAttendence.php';
     var link = 'http://40.65.178.216/ionic/myApp/Teacher/getAttendence.php';
          $http.post(link, {date:date,cid:cid}).then(function (res){
              
          $scope.attendance=res.data;
              console.log($scope.attendance);
             
              
              
          });
  
    
    
    
});