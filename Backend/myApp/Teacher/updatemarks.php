<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";



$postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->testid;
        $status= $request->status;
        $marks=$request->marks;
        $rollnumber=$request->rollnumber;
      
      
      
 
      
    }


    $sqlselect = "UPDATE result JOIN std_course_sec as scs on scs.scs_id=result.std_course_sec_fk  JOIN Student as s on s.student_id=scs.student_fk

SET result.obt_marks='$marks',result.status='$status'
WHERE result.test_info_fk='$id' AND s.roll_number='$rollnumber'";


if (mysqli_query($link, $sqlselect)) {
    echo 1;
} 
else {
    echo "Error: " . $sqlselect . "<br>" . mysqli_error($link);
    
}


  
   
      
      








?>