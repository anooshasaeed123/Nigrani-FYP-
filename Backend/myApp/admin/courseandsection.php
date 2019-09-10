 <?php

include "api.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $prog= $request->program;
        $batch=$request->batch;
        $semester = $request->semester;
       
        
       
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
 $sqlselect = "SELECT c.course_name,sn.section_name,cs.coursesec_id FROM Batch as b INNER JOIN batchProgram as bp on bp.batch_fk=b.batch_id INNER JOIN Program as p on bp.program_fk=p.Program_id INNER JOIN batchSemester as bs on bp.Batchprogram_id=bs.batchProgram_fk INNER JOIN semester as sm on sm.semester_id=bs.semester_fk INNER JOIN batch_sem_course as bsc on bs.batchsem_id=bsc.batchSemester_fk INNER JOIN course as c on c.course_id=bsc.course_fk INNER JOIN courseSection as cs on cs.batch_sem_course_fk=bsc.batch_sem_course_id INNER JOIN section as sn on sn.sec_id=cs.sec_fk
WHERE p.Program_name='$prog' AND b.batch_year='$batch'AND sm.semester='$semester'";
$result = $link->query($sqlselect);
class user{
   public $courseid;
     public $course_name;
   public $section_name;
  
}
//$row = mysqli_fetch_row($result);
$test1=array();
       while($row=mysqli_fetch_assoc($result)){
           
           $test=new user();
            $test->courseid=$row['coursesec_id'];
            $test->course_name=$row["course_name"];
           $test->section_name=$row["section_name"];
            
          //  $test->section=$row["sectionID"];
            $test1[]= $test;
        }
      
        $myJSON = json_encode($test1);
           print_r($myJSON);
  
      
      
       $test1 = array();
?>