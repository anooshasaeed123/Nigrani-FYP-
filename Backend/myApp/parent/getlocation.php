<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";



$postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $pid = $request->pid;
        $sid=$request->sid;
     
        
        
        $sqlselect="SELECT s.first_name,l.Longitude,l.Latitude FROM Location as l INNER JOIN student_loc as sl ON l.Location_id=sl.location_fk INNER JOIN Student as s on s.student_id=sl.student_fk INNER JOIN Parent as p on p.parent_id=s.parent_fk WHERE p.parent_id='$pid' AND s.student_id='$sid'";
        
        
        
        
    $result = $link->query($sqlselect);
      
      
class location{
    
    public $long;
    public $lat;
    
    
    
}
$location=array();

 while($row=mysqli_fetch_assoc($result)){
     
       $loc=new location();
    
 
    
    $loc->long=$row["Longitude"];
      $loc->lat=$row["Latitude"];
     $location[]=$loc;
        
         }
        $myJSON = json_encode($location);
   print_r($myJSON);

     
      
 
      
    }

?>