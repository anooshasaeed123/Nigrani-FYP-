<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";



$postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $position = $request->position;
        $user= $request->user;
        
        $lat= $position->lat;
        $long= $position->lng;
           
      
      
 
      
    }


    


$found = "false";
$sqlselect = "INSERT INTO Location(longitude, latitude)
VALUES ('$long', '$lat')";

  

if (mysqli_query($link, $sqlselect)) {
    
    $last_id = $link->insert_id;
     echo $last_id;
} 
else {
    echo "Error: " . $sql . "<br>" . mysqli_error($link);
}


$sql="INSERT INTO student_loc(student_fk,location_fk)
VALUES ('$user', '$last_id')";


if (mysqli_query($link, $sql)) {
    
    $last_id = $link->insert_id;
     echo $last_id;
} 
else {
    echo "Error: " . $sql . "<br>" . mysqli_error($link);
}

      
       
      
      
      








?>