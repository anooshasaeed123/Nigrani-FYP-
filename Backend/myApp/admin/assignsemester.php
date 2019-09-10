<?php
include "api.php";
    //http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
    
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $batchid = $request->batchid;
        $semester= $request->semester;
        
        
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

$sql="INSERT INTO batchSemester(batchProgram_fk,semester_fk)
SELECT '$batchid',semester.semester_id FROM semester WHERE semester.semester='$semester'";

$result = $link->query($sql);
if($result){
    echo 1;
}
else
{
    echo "Error: " . $sql. "<br>" . mysqli_error($link);
}

?>

