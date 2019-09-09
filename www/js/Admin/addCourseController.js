angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('addCourseController', function($scope, $http,$state,$ionicPopup) {

  $scope.loadMore = function() {
    $http.get('/more-items').success(function(items) {
      useItems(items);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

   $scope.addCourseBackButton= function(){
        
         
           $state.go('adminhome.course');

             
        
      };
      

   $scope.data = {};
      //$scope.data ="hiiii";
      //var ShowProglink = 'http://127.0.0.1:8080/myApp/admin/retrieveProgram.php';
       var ShowProglink = 'http://40.65.178.216/ionic/myApp/admin/retrieveProgram.php';
      $http.post(ShowProglink, {}).then(function (res){
         $scope.allprogfound = res.data;
         console.log($scope.allprogfound);

           });
    
  $scope.getbatch=function(){
      console.log($scope.data.program);
       //var Showbatchlink = 'http://127.0.0.1:8080/myApp/admin/retrieveBatch.php';
         var Showbatchlink = 'http://40.65.178.216/ionic/myApp/admin/retrieveBatch.php';
      $http.post(Showbatchlink, {program:$scope.data.program}).then(function (res){
         $scope.allbatchfound = res.data;
         console.log($scope.allbatchfound);

           });
      
      
      
  }
  
  $scope.getsemester=function(){
      
      console.log($scope.data.batch);
      console.log($scope.data.program);
      
      // var Showsemesterlink = 'http://127.0.0.1:8080/myApp/admin/retrieveSem.php';
         var Showsemesterlink = 'http://40.65.178.216/ionic/myApp/admin/retrieveSem.php';
      $http.post(Showsemesterlink, {batch:$scope.data.batch,program:$scope.data.program}).then(function (res){
         $scope.allsemfound = res.data;
         console.log($scope.allsemfound);

           });

      
      
      
      
  }
    

     $scope.addCourseSubmit = function(){
         
         
            
        var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Sure!');
              var coursename= $scope.data.courseName;
  var coursecode= $scope.data.courseCode;
         var credithours=$scope.data.creditHours;
       
         
          //var link = 'http://127.0.0.1:8080/myApp/admin/addCourse.php';
                var link = 'http://40.65.178.216/ionic/myApp/admin/addCourse.php';
 
         $http.post(link, {courseName : coursename,coursecode:coursecode,credithours:credithours}).then(function (res){
            
               $scope.found = res.data;
           if($scope.found == "yup")
              {
            alert("added");
              }
              if($scope.found != "yup")
              {
                  
                   var alertPopup = $ionicPopup.alert({
     
      template: 'Course sucessfully added'
    });
           
              }
           

          });
         
             
            
         } else {
            console.log('Not sure!');
         }
      });
         
  
         
         
         
     } 
      

        


      

        
     


      
});