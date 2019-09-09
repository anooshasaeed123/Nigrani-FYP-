angular.module('starter.controllers',['ionic'])
.config(function($ionicConfigProvider) {
        if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})
App.controller('issueChallanController', function($scope, $http,$state) {

  $scope.loadMore = function() {
    $http.get('/more-items').success(function(items) {
      useItems(items);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

   $scope.issueChallanBackButton= function(){
        
         
           $state.go('adminhome.challan');

             
        
      };
      

   $scope.data = {};



      //$scope.data ="hiiii";
     $scope.issueChallanSubmit = function(){

         var link = 'http://127.0.0.1:8080/myApp/admin/issueChallan.php';
         $scope.sessionprogramid = sessionStorage.getItem('proggid');
         console.log($scope.sessionprogramid);
         $scope.sessionbatchid = sessionStorage.getItem('batchid');
         console.log($scope.sessionbatchid);
         $scope.sessionsemid = sessionStorage.getItem('semid');
         console.log($scope.sessionsemid);




         $http.post(link, {prog:$scope.sessionprogramid,batch:$scope.sessionbatchid,sem:$scope.sessionsemid,regFee: $scope.data.registerationFee, 
          tuiFee : $scope.data.tuitionFee,challanIssueDate: $scope.data.issueDate,
          challanSubmissionDate : $scope.data.submissionDate, chllanIssuedBy : $scope.data.issuedBy}).then(function (res){

            
               $scope.found = res.data;
           if($scope.found == "yup")
              {
            alert("added");
              }
              if($scope.found != "yup")
              {
            alert("added");
              }
           

          });
      };


      
});