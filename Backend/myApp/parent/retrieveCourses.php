 <?php

include "api.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->cid;
        
       
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
//else echo"yes";
 $sqlselect = "SELECT c.course_name as cn,c.course_id as cid from course as c inner JOIN batch_sem_course as bsc on c.course_id=bsc.course_fk inner JOIN courseSection as cs on bsc.batch_sem_course_id=cs.batch_sem_course_fk INNER JOIN std_course_sec as scs on cs.coursesec_id=scs.course_sec_fk INNER JOIN Student as s on s.student_id=scs.student_fk where s.student_id='$id'";
$result = $link->query($sqlselect);
class user{
   public $course_name;
   public $course_id;
  
}
//$row = mysqli_fetch_row($result);
$test1=array();
       while($row=mysqli_fetch_assoc($result)){
           
           $test=new user();
            $test->course_name=$row["cn"];
            $test->course_id=$row["cid"];
            
          //  $test->section=$row["sectionID"];
            $test1[]= $test;
        }
      
        $myJSON = json_encode($test1);
           print_r($myJSON);
  
      
      
       $test1 = array();
?>
