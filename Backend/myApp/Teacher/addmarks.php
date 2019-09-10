<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";



$postdata = file_get_contents("php://input");

  if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->user_id;
        $marks=$request->marks;
      
    
     
      
      $obmarks=$marks[0]->obmarks;
      $testid=$marks[0]->testid;
      $totmarks=$marks[0]->totmarks;
      $rollnumber=$marks[0]->rollnumber;
      $status=$marks[0]->status;
      $section=$marks[0]->section;
      $batch=$marks[0]->batch;
       $course = $marks[0]->course;
      $program = $marks[0]->program;
        $semester = $marks[0]->semester;
    $weightage=$marks[0]->obweightage;
      
    
  
      
      
      
      
  


$sql="INSERT INTO result(obt_marks,status,test_info_fk,std_course_sec_fk,Ob_weightage) 
SELECT '$obmarks','$status',ti.test_id,scs.scs_id,'$weightage' FROM Program AS p INNER JOIN batchProgram AS bp ON p.Program_id = bp.program_fk INNER JOIN Batch AS b ON b.batch_id = bp.batch_fk INNER JOIN batchSemester AS bs ON bp.Batchprogram_id = bs.batchProgram_fk INNER JOIN batch_sem_course as bsc on bs.batchsem_id=bsc.batchSemester_fk INNER JOIN course as c on c.course_id=bsc.course_fk INNER JOIN courseSection AS cs ON cs.batch_sem_course_fk=bsc.batch_sem_course_id INNER JOIN CourseTeacher AS ct ON cs.coursesec_id = ct.course_sec_fk INNER JOIN Teacher AS t ON t.id=ct.teacher_fk INNER JOIN semester as sm on bs.semester_fk = sm.semester_id INNER JOIN section as sn on sn.sec_id = cs.sec_fk INNER JOIN std_course_sec as scs on cs.coursesec_id=scs.course_sec_fk INNER JOIN Student as s on s.student_id=scs.student_fk INNER JOIN Test_info as ti on ct.courseTeacher_id=ti.course_teacher_fk
WHERE t.id='$id' AND s.roll_number='$rollnumber' AND ti.test_id='$testid'" ;

$result = $link->query($sql);
if($result){

    echo 1;
} 
else {
    echo "Error: " . $sql . "<br>" . mysqli_error($link);
    
}

  }

?>