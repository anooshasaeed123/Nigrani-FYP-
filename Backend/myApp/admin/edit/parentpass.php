<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";



$postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->gid;
        $pass= $request->pass;
      
      
      
      
 
      
    }


    $sqlselect = "UPDATE Parent as p

SET p.password='$pass'
WHERE p.guardianNo='$id' ";


if (mysqli_query($link, $sqlselect)) {
    echo "marks updated successfully";
} 
else {
    echo "Error: " . $sql . "<br>" . mysqli_error($link);
    
}


  
   
      
      








?>