angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('assignSectionsToCourseController', function($scope, $http,$state,$ionicPopup) {

  $scope.loadMore = function() {
    $http.get('/more-items').success(function(items) {
      useItems(items);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

   $scope.assignSectionsToCourseBackButton= function(){
        
         
           $state.go('adminhome.course');

             
        
      };
      

   $scope.data = {};
      //$scope.data ="hiiii";
       //var ShowAllCourseLink = 'http://127.0.0.1:8080/myApp/admin/retrieveAllCourses.php';
       var Link = 'http://40.65.178.216/ionic/myApp/admin/retrieveAllCourses.php';
      $http.post(Link, {}).then(function (res){
         $scope.allcoursefound = res.data;
         console.log($scope.allcoursefound);

           });
    
      // var ShowProglink = 'http://127.0.0.1:8080/myApp/admin/retrieveProgram.php';
       var ShowProglink = 'http://40.65.178.216/ionic/myApp/admin/retrieveProgram.php';
      $http.post(ShowProglink, {}).then(function (res){
         $scope.allprogfound = res.data;
         console.log($scope.allprogfound);

           });
    
      $scope.getbatch=function(){
          sessionStorage.setItem('cprogram',$scope.data.program);
      console.log($scope.data.program);
       //var Showbatchlink = 'http://127.0.0.1:8080/myApp/admin/retrieveBatch.php';
             var link = 'http://40.65.178.216/ionic/myApp/admin/retrieveBatch.php';
      $http.post(link, {program:$scope.data.program}).then(function (res){
         $scope.allbatchfound = res.data;
         console.log($scope.allbatchfound);

           });
      
      
      
  }
      
        $scope.getsemester=function(){
            
            var program=sessionStorage.getItem('cprogram');
            sessionStorage.setItem('cbatch',$scope.data.batch);
            
             
    
      // var link = 'http://127.0.0.1:8080/myApp/admin/retrieveSem.php';
               var link = 'http://40.65.178.216/ionic/myApp/admin/retrieveSem.php';
      $http.post(link, {batch:$scope.data.batch,program:program}).then(function (res){
         $scope.allsemfound = res.data;
         console.log($scope.allsemfound);

           });

      
      
      
      
  }
      
          $scope.getsection=function(){
              
              var batch=sessionStorage.getItem('cbatch');
               var program=sessionStorage.getItem('cprogram');
                $scope.section1=[];
      
    
      // var link = 'http://127.0.0.1:8080/myApp/admin/retrieveSection.php';
                 var link = 'http://40.65.178.216/ionic/myApp/admin/retrieveSection.php';
      $http.post(link, {batch:batch,program:program,semester:$scope.data.Semester}).then(function (res){
         $scope.section = res.data;
        

           });
      
      
      
  }
          
          $scope.section1=[];
  
$scope.addsection=function(x){
    
    console.log(x.name);
    
    $scope.section1.push(x.name);
    
  
    
}

 

     $scope.addCourseSubmit = function(x){
         
         
            
        var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
              var section = $scope.section1;
           console.log(section);
      
         
         
               var course =  $scope.data.course;
           var program=$scope.data.program;
           var batch = $scope.data.batch;
           var semes=$scope.data.Semester;
           // var link = 'http://127.0.0.1:8080/myApp/admin/assignSectionsToCourse.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/assignSectionsToCourse.php';
           
           
             $http.post(link, {batch:batch,program:program,semester:semes,course:course,section:section}).then(function (res){
         $scope.s = res.data;
                 console.log($scope.s);
                 if($scope.s==" 11")
                     {
                          var alertPopup = $ionicPopup.alert({
     
      template: 'Sections sucessfully assigned'
    });
                     }
                 else
                     {
                      var alertPopup = $ionicPopup.alert({
     
      template: 'Assignment failed. Kindly check your fields and re assign'
    });
                     }
        

           });
         
             
            
         } else {
            console.log('Not sure!');
         }
      });
         
         
         
         
         
         
         
         

         
       
      

      };


      
});


App.controller('assigncoursestostudents', function($scope, $http,$state,$ionicPopup) {
    
    
    
       $scope.BackButton=function(){
        
        
      
        $state.go('adminhome.student')
        
        
        
        
        
    }
    
    
    $scope.assign=function(){
        
        
        
            var rollnumber=$scope.data.rollnumber;

     // var link = 'http://localhost:8080/myApp/admin/getstudent.php';
       var link = 'http://40.65.178.216/ionic/myApp/admin/getstudent.php';
         $http.post(link, {rollnumber:rollnumber}).then(function (res){
              
          $scope.student=res.data;
             console.log($scope.student);
              
            if($scope.student.length==0){
                         var alertPopup = $ionicPopup.alert({
     
      template: 'Roll Number does not exist'
    });
                
                
                
            }
             else{
                 
                    sessionStorage.setItem('rollnumber',rollnumber);
        $state.go('courseassignment');
                 
                 
             }
             
        
        
          });
    
        
        
       
    
        
        
        
        
        
    }
    
    
    
    
    
    
});