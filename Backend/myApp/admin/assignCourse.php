<?php
include "api.php";
    //http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
    
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $course = $request->coursesecid;
        $teacher= $request->teacherid;
        
        
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

$sql="INSERT INTO CourseTeacher(teacher_fk,course_sec_fk) VALUES ('$teacher','$course')";

$result = $link->query($sql);
if($result){
    echo "yup";
}
else
{
    echo "Error: " . $sql. "<br>" . mysqli_error($link);
}

?>

