angular.module('starter.controllers',[])

App.controller('homecontroller', function($scope, $http,$state) {
    
    
    
  initMap();
var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 31.582045, lng: 74.329376	},
    zoom: 6
  });
    
    
        
            
             
            
            
            
       
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
        
         var marker = new google.maps.Marker({
    position: pos,
    map: map,
    title: 'your current location'
  });
        
        
          google.maps.event.addListener(marker,'click',function() {
    map.setZoom(18);
    map.setCenter(marker.getPosition());
  });
      
        
      $scope.store(pos);
        
        

//      infoWindow.setPosition(pos);
//      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
        
        
        
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
   setInterval(initMap,600000);
    
    
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}
$scope.store = function(pos){
    
      var user = sessionStorage.getItem('user');
            
    
     var link = 'http://localhost:8080/myApp/student/storelocation.php';
     
     // var link = 'https://40.65.178.216/ionic/myApp/student/storelocation.php';

        $http.post(link, {position: pos,user:user}).then(function (res){
            
   
    console.log(res.data);
        });
    
    
    
    
    
    
}


      
});