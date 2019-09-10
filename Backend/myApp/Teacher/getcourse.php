<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";


$postdata = file_get_contents("php://input");
  if (isset($postdata)) {
        $request = json_decode($postdata);
        $program = $request->program; 
       $batch = $request->batch;
      $semester=$request->semester;
    
      $tid=$request->tid;
      
   
      
      
      $sql="SELECT DISTINCT c.course_name from Program AS p INNER JOIN batchProgram AS bp ON p.Program_id = bp.program_fk INNER JOIN Batch AS b ON b.batch_id = bp.batch_fk 
INNER JOIN batchSemester AS bs ON bp.Batchprogram_id = bs.batchProgram_fk INNER JOIN batch_sem_course as bsc on bs.batchsem_id=bsc.batchSemester_fk 
INNER JOIN course as c on c.course_id=bsc.course_fk inner JOIN courseSection as cs ON cs.batch_sem_course_fk=bsc.batch_sem_course_id INNER JOIN CourseTeacher AS ct ON 
cs.coursesec_id = ct.course_sec_fk INNER JOIN Teacher AS t ON t.id=ct.teacher_fk INNER JOIN semester as sm on bs.semester_fk = sm.semester_id INNER JOIN section as sn 
on sn.sec_id = cs.sec_fk WHERE t.id='$tid'  AND b.batch_year='$batch' AND p.Program_name='$program' And sm.semester='$semester'";
      
        $result = $link->query($sql);
      
      

 while($row=mysqli_fetch_assoc($result)){
           
           
      
       $course[] =$row["course_name"];
        
         }



 
        $myJSON = json_encode($course);
   print_r($myJSON);

  }
      
      ?>