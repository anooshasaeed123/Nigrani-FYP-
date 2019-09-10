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
      $course = $request->course;
      
   
      
      
      $sql="SELECT sn.section_name FROM Program as p INNER JOIN batchProgram as bp on bp.program_fk = p.Program_id INNER JOIN Batch as b on b.batch_id=bp.batch_fk INNER JOIN batchSemester as bs ON bs.batchProgram_fk=bp.Batchprogram_id INNER JOIN semester as sm on sm.semester_id = bs.semester_fk INNER JOIN batch_sem_course as bsc on bs.batchsem_id=bsc.batchSemester_fk INNER JOIN courseSection as cs on cs.batch_sem_course_fk=bsc.batch_sem_course_id INNER JOIN section as sn on sn.sec_id = cs.sec_fk INNER JOIN course as c on c.course_id=bsc.course_fk
WHERE p.Program_name='$program' AND b.batch_year='$batch' AND sm.semester='$semester' And c.course_name='$course'";
      
        $result = $link->query($sql);
      
      

 while($row=mysqli_fetch_assoc($result)){
           
           
      
       $section[] =$row["section_name"];
        
         }



 
        $myJSON = json_encode($section);
   print_r($myJSON);

  }
      
      ?>