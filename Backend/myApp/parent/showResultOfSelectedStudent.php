 <?php

include "api.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $studentid = $request->studentid;
        $courseid=$request->courseid;
        
       
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
 $sqlselect ="SELECT result.Ob_weightage,Test_info.weightage, result.obt_marks as obm,result.status as rs,Test_info.test_name as tn, Test_info.total_marks as tm, Student.first_name as fn, Batch.batch_year as byear, Program.Program_name as pn, semester.semester as sm,course.course_name as cn,Student.roll_number as rl,section.section_name as sn from result INNER JOIN Test_info on Test_info.test_id=result.test_info_fk INNER JOIN std_course_sec on std_course_sec.scs_id=result.std_course_sec_fk INNER JOIN Student on Student.student_id=std_course_sec.student_fk INNER JOIN courseSection on courseSection.coursesec_id=std_course_sec.course_sec_fk INNER JOIN batch_sem_course on batch_sem_course.batch_sem_course_id=courseSection.batch_sem_course_fk INNER JOIN course on course.course_id=batch_sem_course.course_fk INNER JOIN batchSemester ON batchSemester.batchsem_id=batch_sem_course.batchSemester_fk INNER JOIN semester on semester.semester_id=batchSemester.semester_fk
   INNER JOIN batchProgram on batchProgram.Batchprogram_id=batchSemester.batchProgram_fk 
   INNER JOIN Batch on Batch.batch_id=batchProgram.batch_fk 
   INNER JOIN Program on Program.Program_id=batchProgram.program_fk 
   inner JOIN section on courseSection.sec_fk=section.sec_id
   WHERE Student.student_id='$studentid' and course.course_id='$courseid'";
$result = $link->query($sqlselect);
class user{
   public $std_fname;
   public $std_batch;
   public $std_prog;
   public $std_semes;
   public $std_cn;
   public $test_n;
   public $test_obm;
   public $test_tm;
   public $test_s;
    public $roll_num;
    public $section;
     public $obweightage;
     public $tweightage;
  
}
//$row = mysqli_fetch_row($result);
$test1=array();
       while($row=mysqli_fetch_assoc($result)){
           
           $test=new user();
            $test->std_fname=$row["fn"];
            $test->std_batch=$row["byear"];
            $test->std_prog=$row["pn"];
            $test->std_semes=$row["sm"];
            $test->std_cn=$row["cn"];
            $test->test_n=$row["tn"];
            $test->test_obm=$row["obm"];
            $test->test_tm=$row["tm"];
            $test->test_s=$row["rs"];
              $test->roll_num=$row["rl"];
            $test->section=$row["sn"];
              $test->obweightage=$row["Ob_weightage"];
              $test->tweightage=$row["weightage"];
          
          //  $test->section=$row["sectionID"];
            $test1[]= $test;
        }
      
        $myJSON = json_encode($test1);
           print_r($myJSON);
  
      
      
       $test1 = array();
?>
