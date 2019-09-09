angular.module('starter.controllers',[])

App.controller('markscontroller', function($scope, $http,$state) {

 $scope.data = {};
    
           var userid = sessionStorage.getItem('user');
    
  
    
    
  //    var link = 'http://localhost:8080/myApp/Teacher/listTest.php';
     var link = 'http://40.65.178.216/ionic/myApp/Teacher/listtest.php';
    
               $http.post(link, {user_id : userid}).then(function (res){
                   
                 
    
                   $scope.test=res.data;
                   console.log($scope.test);
                   
            
 

       });
    
    
    $scope.marks = function(x){
        
        sessionStorage.setItem('Mcourse',x.coursename);
         sessionStorage.setItem('Msection',x.sectionname);
          sessionStorage.setItem('Mbatch',x.batchyear);
         sessionStorage.setItem('Mtestid',x.testid);
        sessionStorage.setItem('Mprogram',x.program);
            sessionStorage.setItem('Msemester',x.semester);
         sessionStorage.setItem('Mtotmarks',x.totmarks);
        
        $state.go('teacherhome.updatemarks');
        
        
        
        
        
    }
    
        $scope.viewmarks = function(x){
        
      
         sessionStorage.setItem('vtestid',x.testid);
        
        $state.go('teacherhome.viewtestmarks');
        
        
        
        
        
    }
    
    
    
  
    

    
    

      
});