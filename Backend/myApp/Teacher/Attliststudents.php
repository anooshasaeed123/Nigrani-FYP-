<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";



$postdata = file_get_contents("php://input");
  if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->user_id;
      
          $batch = $request->batch;
      $section = $request->section;
      $program= $request->program;
      $course= $request->course;
      $semester=$request->semester;
      
      
    
      
      $sqlselect="SELECT s.first_name,s.last_name,s.roll_number,c.course_name FROM Student as s inner JOIN std_course_sec as scs on scs.student_fk = s.student_id INNER JOIN courseSection as cs on cs.coursesec_id = scs.course_sec_fk 


INNER JOIN batch_sem_course as bsc on cs.batch_sem_course_fk=bsc.batch_sem_course_id
INNER JOIN course as c on c.course_id=bsc.course_fk INNER JOIN batchSemester as bs on bs.batchsem_id=bsc.batchSemester_fk

INNER JOIN CourseTeacher as ct on cs.coursesec_id=ct.course_sec_fk


INNER JOIN Teacher as t on t.id=ct.teacher_fk INNER JOIN batchProgram as bp on bs.batchProgram_fk=bp.Batchprogram_id INNER JOIN Program as p on p.Program_id=bp.program_fk INNER JOIN Batch as b on b.batch_id=bp.batch_fk inner JOIN semester as sm ON sm.semester_id=bs.semester_fk INNER JOIN section as se on se.sec_id=cs.sec_fk
 WHERE t.id='$id' AND p.Program_name='$program' AND b.batch_year='$batch' AND sm.semester='$semester' AND se.section_name='$section' AND c.course_name='$course'"; 
       $result = $link->query($sqlselect);
      
      class student{
    
    public $fname;
    public $lname;
    public $rollnumber;
    
    
}
  
   $student1=array();
while($row=mysqli_fetch_assoc($result)){
    
    $student=new student();
    
    $student->fname = $row["first_name"];
     $student->lname = $row["last_name"];
     $student->rollnumber = $row["roll_number"];
    
    
      $student1[]= $student;
    
    
}
      
      $myJSON = json_encode($student1);
     print_r($myJSON);
  
      
      
       $student1 = array();
      
      
      
  }

?>