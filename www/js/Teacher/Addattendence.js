angular.module('starter.controllers',[])

App.controller('Addattendence', function($scope, $http, $state,attendence,$stateParams,$filter) {
    var batch=$stateParams.batch;
    var program=$stateParams.program;
    var semester = $stateParams.semester;
    var course=$stateParams.course;
    var section = $stateParams.section;
  

       var userid = sessionStorage.getItem('user');
   
             
    
     // var link = 'http://localhost:8080/myApp/Teacher/Attliststudents.php';
      var link = 'http://40.65.178.216/ionic/myApp/Teacher/Attliststudents.php';
    
               $http.post(link, {user_id : userid,batch:batch,section:section,course:course,program:program,semester:semester}).then(function (res){
                   
                 
    
                   $scope.students=res.data;
                   
                  
                
                   
                   
                   
                   

                   
            
 

       });
    
   
    
    $scope.addattendence=function(x,data,date){
        var rollnumber = x.rollnumber
        
        var status = data;
       
        var date= $filter('date')(date, "dd/MM/yyyy");
        var course=$stateParams.course;
        attendence1=new Array();
         
      
        var attendence = [
  {rollnumber:rollnumber
   , status: status,
  course:course,

  date:date}
 
];
        attendence1.push(attendence);
        
             var userid = sessionStorage.getItem('user');
   
             
    
      //var link = 'http://localhost:8080/myApp/Teacher/attendence.php';
         var link = 'http://40.65.178.216/ionic/myApp/Teacher/attendence.php';
    
               $http.post(link, {user_id : userid,attendence:attendence1}).then(function (res){
                   
                 
    
               
                   console.log(res.data);
                   
                  
                
                   
                   
                   
                   

                   
            
 

       });
        
       
        
        
    
    };
    
  
    
    
    
    

      
});