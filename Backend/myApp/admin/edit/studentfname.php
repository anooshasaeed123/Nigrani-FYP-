<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";



$postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->sid;
        $fname = $request->fname;
      
      
      
      
 
      
    }


    $sqlselect = "UPDATE Student as p

SET p.first_name='$fname'
WHERE p.roll_number='$id' ";


if (mysqli_query($link, $sqlselect)) {
    echo "marks updated successfully";
} 
else {
    echo "Error: " . $sqlselect . "<br>" . mysqli_error($link);
    
}


  
   
      
      








?>