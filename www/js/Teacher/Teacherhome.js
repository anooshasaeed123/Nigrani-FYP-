angular.module('starter.controllers',[])

App.controller('Teacherhome', function($scope, $http,$state) {


$scope.logoutTeacher=function(){
    

    sessionStorage.clear;
    $state.go('page1');
}
  
});