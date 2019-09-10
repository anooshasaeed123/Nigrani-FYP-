<?php


 
 include "api.php";
    //http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
    
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $rollnumber = $request->rollnumber;
         //echo $cnic;
        // if ($cnic != "") {
            
        //     $found=true;
        //     echo "Server returns: " . $cnic;
        // }
        // else {
        //     echo "Empty username parameter!";
        // }
        
    }
    else {
        echo "Not called properly with username parameter!";
    }
 $link = mysqli_connect('40.65.178.216', 'root', 'Myproject2018');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
//echo 'Connected successfully';
$db=mysqli_select_db($link,"ParentPortal");
if(!$db)
{
    echo "sorry";
}








$sql = "SET foreign_key_checks = 0; DELETE FROM Student WHERE roll_number='$rollnumber';
SET foreign_key_checks = 1;";
$result = $link->query($sql);
if($result){
    echo "yes";
}
else
{
   echo "Error: " . $sql . "<br>" . mysqli_error($link);
}
?>