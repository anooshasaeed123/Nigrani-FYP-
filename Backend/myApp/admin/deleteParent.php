<?php


 
 include "api.php";
    //http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
    
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->id;
       
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
$sql = "DELETE r,scs,s,p FROM result as r INNER JOIN std_course_sec as scs on r.std_course_sec_fk=scs.scs_id  INNER JOIN Attendence as a on scs.scs_id=a.std_course_sec_fk INNER JOIN Student as s on s.student_id =scs.student_fk INNER JOIN Parent as p on p.parent_id = s.parent_fk

WHERE p.guardianNo='$id'";
$result = $link->query($sql);
if($result){
    echo "yes";
}
else
{
    echo "Error: " . $sql . "<br>" . mysqli_error($link);
}
?>