angular.module('starter.controllers',[])

App.controller('Attendencecontroller', function($scope, $http,$state,attendence,$ionicPopup){
    
   //$scope.Attendence = attendence;
    

 $scope.data = {};
    
           var userid = sessionStorage.getItem('user');
    
  
     
     // var link = 'http://localhost:8080/myApp/Teacher/attendencelist.php';
     var link = 'http://40.65.178.216/ionic/myApp/Teacher/attendencelist.php';
    
               $http.post(link, {user_id : userid}).then(function (res){
                   
                 
   
                   $scope.attendence1=res.data;
                   console.log($scope.attendence1);
               
              
                   
                   
                   
            
 

       });
    
        $scope.attendence3 = function(data){
            
 
        
        
           
                  var batch = data.batchyear;
            var section = data.sectionname;
            var program = data.program;
            var semester= data.semester;
           var course= data.coursename;
                
                
$state.go('teacherhome.Addattendence',
          
          
          {batch:batch,section:section,program:program,semester:semester,course:course} );
        
    
                
        



        

   
        
 
            
   
      
            
           
            
            
        
        
    };
    $scope.view=function(x){
        console.log(x);
        
        sessionStorage.setItem('cid',x.cid);
    
      
              
        $state.go('teacherhome.retrievedateattendence');
        
        
        
    }
    

    
    

      
});




