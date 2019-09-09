angular.module('starter.controllers',[])

App.controller('retrievedate', function($scope, $http,$state,attendence){
    
    var cid=sessionStorage.getItem('cid');
    
       //   var link = 'http://localhost:8080/myApp/Teacher/retrievedate.php';
     var link = 'http://40.65.178.216/ionic/myApp/Teacher/retrievedate.php';
    
               $http.post(link, {cid: cid}).then(function (res){
                   
                 if (res!=null){
                  
                      $scope.date=res.data;
                   console.log($scope.date);
                   
                 }
                   else
                       {
                           alert('x');
                         
                       }
               
              
                   
                   
                   
            
 

       });
    
    
    $scope.viewAtt=function(x){
        
        
        console.log(x);
        
        sessionStorage.setItem('date',x);
        $state.go('teacherhome.viewAttendence');
    }
 
    
    
    
});