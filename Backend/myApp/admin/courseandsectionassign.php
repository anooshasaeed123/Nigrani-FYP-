 <?php

include "api.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
       
        $coursesecid=$request->coursesecid;
        $sid=$request->sid;
        
       
        
       
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


$sql="INSERT INTO std_course_sec(student_fk,course_sec_fk)
VALUES ('$sid','$coursesecid')";


if (mysqli_query($link, $sql)) {
    
 echo "yes";
} 
else {
    echo "no";
}


?>