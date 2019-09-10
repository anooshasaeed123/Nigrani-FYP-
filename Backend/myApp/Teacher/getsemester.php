<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";


$postdata = file_get_contents("php://input");
  if (isset($postdata)) {
        $request = json_decode($postdata);
        $program = $request->program; 
       $batch = $request->batch;
   
      
      
      $sql="SELECT sm.semester FROM Program as p INNER JOIN batchProgram as bp on bp.program_fk = p.Program_id INNER JOIN Batch as b on b.batch_id=bp.batch_fk INNER JOIN batchSemester as bs ON bs.batchProgram_fk=bp.Batchprogram_id INNER JOIN semester as sm on sm.semester_id = bs.semester_fk WHERE p.Program_name='$program' AND b.batch_year='$batch'";
      
        $result = $link->query($sql);
      
      

 while($row=mysqli_fetch_assoc($result)){
           
           
      
       $semester[] =$row["semester"];
        
         }



 
        $myJSON = json_encode($semester);
   print_r($myJSON);

  }
      
      ?>