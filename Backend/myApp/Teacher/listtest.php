<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";


$postdata = file_get_contents("php://input");
  if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->user_id;
    
      
     $sqlselect = "SELECT ti.test_id,ti.testdate,ti.test_name,ti.total_marks,c.course_name,p.Program_name,b.batch_year,sn.section_name,sm.semester FROM Program AS p INNER JOIN batchProgram AS bp ON p.Program_id = bp.program_fk INNER JOIN Batch AS b ON b.batch_id = bp.batch_fk INNER JOIN batchSemester AS bs ON bp.Batchprogram_id = bs.batchProgram_fk


INNER JOIN batch_sem_course as bsc on bs.batchsem_id=bsc.batchSemester_fk 
INNER JOIN course as c on c.course_id=bsc.course_fk inner JOIN courseSection as cs ON cs.batch_sem_course_fk=bsc.batch_sem_course_id 





INNER JOIN CourseTeacher AS ct ON cs.coursesec_id = ct.course_sec_fk INNER JOIN Teacher AS t ON t.id=ct.teacher_fk INNER JOIN semester as sm on bs.semester_fk = sm.semester_id INNER JOIN section as sn on sn.sec_id = cs.sec_fk INNER JOIN Test_info as ti on ti.course_teacher_fk = ct.courseTeacher_id WHERE t.id='$id'";
      
      
      
       $result = $link->query($sqlselect);
     
  class testteacher{
   public $testid;
   public $testname;
   public $totmarks;
   public $coursename;
    public $program;
   public $batchyear;
      public $semester;
   public $sectionname;
      public $date;
  
}
       
      $test1=array();
       while($row=mysqli_fetch_assoc($result)){
           
            $test=new testteacher();
      
      $test->testid=$row["test_id"];
        $test->testname=$row["test_name"];
        $test->totmarks=$row["total_marks"];
        $test->coursename=$row["course_name"];
        $test->program=$row["Program_name"];
        $test->batchyear=$row["batch_year"];
        $test->sectionname=$row["section_name"];
         $test->semester=$row["semester"];
              $test->date=$row["testdate"];
           
         
           
           
            
       $test1[]= $test;
          // array_push($test1,$test);
         }
      
       $myJSON = json_encode($test1);
     print_r($myJSON);
  
      
      
       $test1 = array();
            

       
      
  }


?>