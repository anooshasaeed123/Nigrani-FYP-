 <?php

include "api.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
      $studentid = $request->studentid;
        
       
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
// SELECT Student.fname as firstname,Student.lname as lastname, Student.roll_number as rollnumber, challan.registerationFee as regfee, challan.tuitionFee as tuifee, challan.issueDate as issuedate, challan.lastDate as lastdate, challan.issuedBy as issuedby, challan.registerationFee +challan.tuitionFee as total from challan inner join Student on Student.batch_fk=challan.batchFK where student_id='$studentid'

//else echo"yes";
 $sqlselect ="SELECT Student.first_name as fn,Student.last_name as ln, semester.semester as sm,Batch.batch_year as byear,Program.Program_name as pn,course.course_name as cn, batchSemester.batchsem_id as bsid,challan.subDate  as subDate,challan.registerationFee as regfee,challan.tuitionFee as tuifee, challan.issueDate as issueD,challan.issuedBy as ib,challan.registerationFee +challan.tuitionFee as total FROM semester
   INNER JOIN batchSemester on batchSemester.semester_fk=semester.semester_id
   INNER JOIN batch_sem_course on batch_sem_course.batchSemester_fk=batchSemester.batchsem_id
   INNER JOIN courseSection on courseSection.batch_sem_course_fk=batch_sem_course.batch_sem_course_id
   INNER JOIN std_course_sec on std_course_sec.course_sec_fk=courseSection.coursesec_id 
   INNER JOIN Student on Student.student_id=std_course_sec.student_fk 
   INNER JOIN batchProgram on batchProgram.Batchprogram_id=batchSemester.batchProgram_fk 
   INNER JOIN Batch on Batch.batch_id=batchProgram.batch_fk 
   INNER JOIN Program on Program.Program_id=batchProgram.program_fk 
   INNER JOIN course on course.course_id=batch_sem_course.course_fk
   INNER  JOIN challan on challan.batch_sem_fk=batchSemester.batchsem_id 
   WHERE Student.student_id='$studentid'";
$result = $link->query($sqlselect);
class user{
   public $std_fname;
   public $std_lastname;
   public $std_batch;
   public $std_prog;
   public $std_semes;
   public $std_cn;
   public $std_bsid;
   public $challan_regfee;
   public $challan_tuifee;
   public $challan_issuedate;
   public $challan_lastdate;
   public $challan_issuedby;
   public $challan_total;
  
}
//$row = mysqli_fetch_row($result);
$test1=array();
       while($row=mysqli_fetch_assoc($result)){
           
           $test=new user();
            $test->std_fname=$row["fn"];
            $test->std_lastname=$row["ln"];
            $test->std_batch=$row["byear"];
            $test->challan_regfee=$row["regfee"];
            $test->challan_tuifee=$row["tuifee"];
            $test->std_cn=$row["cn"];
            $test->std_bsid=$row["bsid"];
            $test->challan_issuedate=$row["issueD"];
            $test->challan_lastdate=$row["subDate"];
            $test->challan_issuedby=$row["ib"];
            $test->std_semes=$row["sm"];
            $test->challan_total=$row["total"];
            $test->std_prog=$row["pn"];
            $test1[]= $test;
        }
      
        $myJSON = json_encode($test1);
           print_r($myJSON);
  
      
      
       $test1 = array();
?>
