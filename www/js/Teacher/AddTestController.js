angular.module('starter.controllers',[])

App.controller('AddTest', function($scope, $http,$state,$ionicPopup,$filter) {

 $scope.data = {};
    
    
    
    
             var userid = sessionStorage.getItem('user');
          
  
       
       //  var link = 'http://localhost:8080/myApp/Teacher/getprograms.php';
     var link = 'http://40.65.178.216/ionic/myApp/Teacher/getprograms.php';
    
          $http.get(link).then(function(res){
              
          $scope.programs=res.data;
             
              
              
          });
    
     $scope.program1 = function(){
      
   
        sessionStorage.setItem('program1',$scope.program5);
         var program5 = sessionStorage.getItem('program1');
         
         // var link = 'http://localhost:8080/myApp/Teacher/getbatch.php';
          var link = 'http://40.65.178.216/ionic/myApp/Teacher/getbatch.php';
    
               $http.post(link, {program:program5}).then(function (res){
                   
                 
    
                
                   
                 $scope.batch1=res.data;
                  
         
     });
        
         
     };
    
        $scope.semester = function(){
            
              sessionStorage.setItem('batch2',$scope.batch3);
      
    var batch2 = sessionStorage.getItem('batch2');
   var program = sessionStorage.getItem('program1');
            
            
              //var link = 'http://localhost:8080/myApp/Teacher/getsemester.php';
             var link = 'http://40.65.178.216/ionic/myApp/Teacher/getsemester.php';
    
               $http.post(link, {program:program,batch:batch2}).then(function (res){
                   
                 
    
                
                   
                 $scope.semester=res.data;
            
         
     });
        };
            
    $scope.section = function(){
            
              sessionStorage.setItem('course',$scope.selectedcourse);
    
      
    var batch1 = sessionStorage.getItem('batch2');
   var program = sessionStorage.getItem('program1');
    var semester1 = sessionStorage.getItem('semester1');
        var course =  sessionStorage.getItem('course');
                    
                   
            
            
             // var link = 'http://localhost:8080/myApp/Teacher/getsection.php';
         var link = 'http://40.65.178.216/ionic/myApp/Teacher/getsection.php';
    
               $http.post(link, {program:program,batch:batch1,semester:semester1,course:course}).then(function (res){
                   
                 
    $scope.s = res.data;
                   
              
               
            
         
     });
          
            
           
           
         

        
         
     };
    
    
        $scope.getcourse = function(){
            
              sessionStorage.setItem('semester1',$scope.semester1);
            
                var semester1 = sessionStorage.getItem('semester1');
            
              
    
      
    var batch1 = sessionStorage.getItem('batch2');
   var program = sessionStorage.getItem('program1');

    var userid = sessionStorage.getItem('user');
           
            
            
                    
                   
            
            
            //  var link = 'http://localhost:8080/myApp/Teacher/getcourse.php';
             var link = 'http://40.65.178.216/ionic/myApp/Teacher/getcourse.php';
    
               $http.post(link, {program:program,batch:batch1,semester:semester1,tid:userid}).then(function (res){
                   
                 
    $scope.course = res.data;
                   
                  
                   
              
               
            
         
     });
          
            
           
           
         

        
         
     };
        
       
         

    
     
    
     $scope.Addtest = function(){
         
         
             var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
            
          sessionStorage.setItem('section',$scope.section);
     
    
       var batch1 = sessionStorage.getItem('batch2');
   var program = sessionStorage.getItem('program1');
    var semester1 = sessionStorage.getItem('semester1');
     var section = sessionStorage.getItem('section');
            var userid = sessionStorage.getItem('user');
         var userid = sessionStorage.getItem('user');
         var course = sessionStorage.getItem('course');
         var testname=$scope.testname;
             var weightage=$scope.weightage;
         var marks=$scope.marks;
              var  testdate= $filter('date')($scope.testdate, "dd/MM/yyyy");
           
             
            
            
         
      
            
             // var link = 'http://localhost:8080/myApp/Teacher/addtest.php';
              var link = 'http://40.65.178.216/ionic/myApp/Teacher/addtest.php';
    
               $http.post(link, {program:program,batch:batch1,semester:semester1,section:section,tid:userid,course:course,name:testname,totmarks:marks,testdate:testdate,weightage:weightage}).then(function (res){
                   
                 
           test_id=res.data;
                   
                   console.log(test_id);
                       
                   
                   
                   sessionStorage.setItem('Mtestid',test_id);
        
                   
                   
                   
           $state.go('teacherhome.MarksAdd');
                   
                   
                      });
                   
        
                   
             
            
         } else {
            console.log('Not sure!');
         }
      });
         
         
       
              
                  
                   
              
               
            
         
  
          
         
         
      
         
     };
    
    

      
});