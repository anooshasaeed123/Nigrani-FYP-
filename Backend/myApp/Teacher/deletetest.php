<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";


$postdata = file_get_contents("php://input");
  if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->user_id;
        $testid=$request->testid;
    
      $sql1="DELETE from result WHERE test_info_fk='$testid'";
      
      if (mysqli_query($link, $sql1)) {
    echo "1";
} 
else {
    echo "Error: " . $sql . "<br>" . mysqli_error($link);
    
}
      
      
      $sql = "DELETE FROM Test_info WHERE test_id='$testid'";

if (mysqli_query($link, $sql)) {
    echo "1";
} 
else {
    echo "Error: " . $sql . "<br>" . mysqli_error($link);
    
}



  }
      
    ?>