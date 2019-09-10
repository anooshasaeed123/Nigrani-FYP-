<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";



$postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->gid;
        $des= $request->des;
      
      
      
      
 
      
    }


    $sqlselect = "UPDATE Teacher as p

SET p.designation='$des'
WHERE p.emp_id='$id' ";


if (mysqli_query($link, $sqlselect)) {
    echo "marks updated successfully";
} 
else {
    echo "Error: " . $sql . "<br>" . mysqli_error($link);
    
}


  
   
      
      








?>