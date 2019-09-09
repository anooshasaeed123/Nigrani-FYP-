angular.module('starter.controllers',[])

App.controller('getlocation', function($scope, $http,$state) {
    
    
        $scope.location1 = function(){
        
        
        
         
         var parid = sessionStorage.getItem('parentId');
        
            
           var stid= sessionStorage.getItem('locstd');
         
        //  var link = 'http://localhost:8080/myApp/parent/getlocation.php';
            
             var link = 'http://40.65.178.216/ionic/myApp/parent/getlocation.php';
    
               $http.post(link, {pid:parid,sid:stid}).then(function (res){
                   
                 var lat=res.data[0].lat;
                   var long=res.data[0].long;
                   
                   var a = parseFloat(lat); 
                    var b= parseFloat(long);
                   
                 $scope.initMap(res);
                   
               });
            
            
           
            
         
                   
                   
                   
                   
                   
                   
     
                   
    
        
        
               
        
    };
    
    $scope.initMap=function(data1){
        
        
         // Map options
      var options = {
        zoom:10,
        center:{lat: 31.582045, lng: 74.329376	}
      }

      // New map
      var map = new google.maps.Map(document.getElementById('map'), options);
        
       
        
        $scope.add = function (lat,lng){
            
         var marker = new google.maps.Marker({
          position:new google.maps.LatLng(lat,lng),
          map:map,
          title: 'recent location'
          //icon:props.iconImage
        });
            
            
          google.maps.event.addListener(marker,'click',function() {
    map.setZoom(18);
    map.setCenter(marker.getPosition());
  });
      
            
         
            
             
            
            
            
        }
          
           var x=data1.data.length;
          console.log(x);
       
            for(i=x-1;i>=x-5;i--){
                var lng = data1.data[i].long;
                 var lat = data1.data[i].lat;
                
            console.log(i);
        $scope.add(lat,lng);
      }
        
       
        
      
        
       
        
       
        
    }
                                                
                                                
    
    
    $scope.location1();

    
    



      
});


App.controller('getstudentlocation', function($scope, $http,$state) {
    
    
     $scope.sessiondata = sessionStorage.getItem('parentId');
$scope.data = {};
        // var link = 'http://localhost:8080/myApp/parent/retrieveStudents.php';
     var link = 'http://40.65.178.216/ionic/myApp/parent/retrieveStudents.php'
      
         $http.post(link, {id : $scope.sessiondata}).then(function (res){
          $scope.found = res.data;
          console.log($scope.found);
          
          });
    
    $scope.view=function(x){
        
        sessionStorage.setItem('locstd',x.stdid);
        
        
       $state.go('parenthome.location')
        
        
        
        
        
        
    }
    
    
});
App.controller('test', function($scope, $http,$state) {
    
       var options = {
        zoom:10,
        center:{lat: 31.582045, lng: 74.329376	}
      }

      // New map
      var map = new google.maps.Map(document.getElementById('map'), options);
    
          if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
        
     
      console.log(pos);
        
        
        var triangleCoords = [
          {lat: 31.571683 ,lng:74.309718},
          {lat: 31.573904, lng:74.305030},
          
            {lat: 31.576057, lng: 74.307342}
        ];
            var e = new google.maps.LatLng(31.574953,74.307286);
             var pos1 = new google.maps.LatLng(31.574896  , 74.308003);
            
             var bermudaTriangle = new google.maps.Polygon({paths: triangleCoords});
            var resultColor =
              google.maps.geometry.poly.containsLocation(e, bermudaTriangle) ?
              'blue' :
              'red';
        
         var resultPath = google.maps.geometry.poly.containsLocation(e, bermudaTriangle) ?
              // A triangle.
              "m 0 -1 l 1 2 -2 0 z" :
             google.maps.SymbolPath.CIRCLE;
                new google.maps.Marker({
            position: e,
            map: map,
            icon: {
              path: resultPath,
              fillColor: resultColor,
              fillOpacity: .2,
              strokeColor: 'white',
              strokeWeight: .5,
              scale: 10
            }
          });
       
    var sw = new google.maps.LatLng(e.lat() - 0.1, e.lng() - 0.1);
    var ne = new google.maps.LatLng(e.lat() + 0.1, e.lng() + 0.1);
    var bounds = new google.maps.LatLngBounds(sw, ne);
    if (bounds.contains (pos1))
    	console.log("true");
            
            else{


    console.log("false")
            }



        

   
        
        
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
          
          }

                
        
      
        
       
    
});