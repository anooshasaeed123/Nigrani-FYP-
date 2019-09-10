<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";



$postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->gid;
        $Number= $request->contact;
      
      
      
      
 
      
    }


    $sqlselect = "UPDATE Parent as p

SET p.contact_no='$Number'
WHERE p.guardianNo='$id' ";


if (mysqli_query($link, $sqlselect)) {
    echo "marks updated successfully";
} 
else {
    echo "Error: " . $sqlselect . "<br>" . mysqli_error($link);
    
}


  
   
      
      








?>