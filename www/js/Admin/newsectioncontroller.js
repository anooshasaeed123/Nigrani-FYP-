angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('newsectioncontroller', function($scope, $http,$state,$ionicPopup) {
    
       $scope.assignSectionsToCourseBackButton= function(){
        
         
           $state.go('adminhome.course');

             
        
      };
    
    
   $scope.data = {};
      //$scope.data ="hiiii";
      // var ShowAllCourseLink = 'http://127.0.0.1:8080/myApp/admin/retrieveAllCourses.php';
       var ShowAllCourseLink = 'http://40.65.178.216/ionic/myApp/admin/retrieveAllCourses.php';
      $http.post(ShowAllCourseLink, {}).then(function (res){
         $scope.allcoursefound = res.data;
         console.log($scope.allcoursefound);

           });
    
    
       //var ShowProglink = 'http://127.0.0.1:8080/myApp/admin/retrieveProgram.php';
       var ShowProglink = 'http://40.65.178.216/ionic/myApp/admin/retrieveProgram.php';
      $http.post(ShowProglink, {}).then(function (res){
         $scope.allprogfound = res.data;
         console.log($scope.allprogfound);

           });
    
          $scope.getbatch=function(){
          sessionStorage.setItem('cprogram',$scope.data.program);
      console.log($scope.data.program);
       //var Showbatchlink = 'http://127.0.0.1:8080/myApp/admin/retrieveBatch.php';
                 var Showbatchlink = 'http://40.65.178.216/ionic/myApp/admin/retrieveBatch.php';
      $http.post(Showbatchlink, {program:$scope.data.program}).then(function (res){
         $scope.allbatchfound = res.data;
         console.log($scope.allbatchfound);

           });
      
      
      
  }
          
                $scope.getsemester=function(){
            
            var program=sessionStorage.getItem('cprogram');
            sessionStorage.setItem('cbatch',$scope.data.batch);
            
             
    
      // var Showsemesterlink = 'http://127.0.0.1:8080/myApp/admin/retrieveSem.php';
                       var Showsemesterlink = 'http://40.65.178.216/ionic/myApp/admin/retrieveSem.php';
      $http.post(Showsemesterlink, {batch:$scope.data.batch,program:program}).then(function (res){
         $scope.allsemfound = res.data;
         console.log($scope.allsemfound);

           });

      
      
      
      
  }
                
                $scope.addsection=function(){
                    
                    
                    
                    
                             
        var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
                   console.log($scope.data.course);
                    console.log($scope.data.program);
                     console.log($scope.data.batch);
                     console.log($scope.data.Semester);
                     console.log($scope.data.sectionname);
                    
                     // var link = 'http://127.0.0.1:8080/myApp/admin/newsection.php';
              var link = 'http://40.65.178.216/ionic/myApp/admin/newsection.php';
           
           
             $http.post(link, {batch:$scope.data.batch,program:$scope.data.program,semester:$scope.data.Semester,course:$scope.data.course,section:$scope.data.sectionname}).then(function (res){
                 
         $scope.s = res.data;
                 console.log($scope.s);
                 
                 if($scope.s==" 111"){
                       var alertPopup = $ionicPopup.alert({
     
      template: 'Section sucessfully added'
    });
        
                    
                    
                    }
                 
                 else{
                     
                     
                       var alertPopup = $ionicPopup.alert({
     
      template: 'There was a problem assigning course. Check your fields and try again'
    });
        
                 }
             });
                  
             
            
         } else {
            console.log('Not sure!');
         }
      });
         
               
                    
                    
                    
                    
                    
                    
                    
                }
    
    
});