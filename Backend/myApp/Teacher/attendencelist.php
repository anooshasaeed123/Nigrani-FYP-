<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";


$postdata = file_get_contents("php://input");

  if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->user_id;
      // echo $id;
      
      
  }


$sqlselect="SELECT p.Program_name,sm.semester,b.batch_year,sn.section_name,c.course_name,ct.courseTeacher_id FROM Program AS p INNER JOIN batchProgram AS bp ON p.Program_id = bp.program_fk INNER JOIN Batch AS b ON b.batch_id = bp.batch_fk INNER JOIN batchSemester AS bs ON bp.Batchprogram_id = bs.batchProgram_fk

INNER JOIN batch_sem_course as bsc on bs.batchsem_id=bsc.batchSemester_fk 
INNER JOIN course as c on c.course_id=bsc.course_fk inner JOIN courseSection as cs ON cs.batch_sem_course_fk=bsc.batch_sem_course_id INNER JOIN CourseTeacher AS ct ON cs.coursesec_id = ct.course_sec_fk INNER JOIN Teacher AS t ON t.id=ct.teacher_fk INNER JOIN semester as sm on bs.semester_fk = sm.semester_id INNER JOIN section as sn on sn.sec_id = cs.sec_fk WHERE t.id='$id'";


 $result = $link->query($sqlselect);

class attendence{
 
   public $coursename;
    public $program;
   public $batchyear;
    public $semester;
   public $sectionname;
    public $cid;
    
    
}
    
   $attendence1=array();
while($row=mysqli_fetch_assoc($result)){
    
    $attendence=new attendence();
    
    $attendence->batchyear = $row["batch_year"];
    $attendence->sectionname = $row["section_name"];
      $attendence->program = $row["Program_name"];
    $attendence->coursename = $row["course_name"];
   $attendence->semester = $row["semester"];
    $attendence->cid = $row["courseTeacher_id"];
    
    
      $attendence1[]= $attendence;
    
    
}

   $myJSON = json_encode($attendence1);
     print_r($myJSON);
  
      
      
       $attendence1 = array();



?>