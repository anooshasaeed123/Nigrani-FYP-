<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";


$postdata = file_get_contents("php://input");
  if (isset($postdata)) {
        $request = json_decode($postdata);
        $program = $request->program; 
   
      
      
      $sql="SELECT b.batch_year FROM Program as p INNER JOIN batchProgram as bp on bp.program_fk = p.Program_id INNER JOIN Batch as b on b.batch_id=bp.batch_fk
WHERE p.Program_name='$program'";
      
        $result = $link->query($sql);
      
      
class batch{
    
    public $batch;
    
    
    
}
$batch1=array();

 while($row=mysqli_fetch_assoc($result)){
     
       $batch=new batch();
    
 
    
    $batch->batch=$row["batch_year"];
     $batch1[]=$batch;
        
         }
        $myJSON = json_encode($batch1);
   print_r($myJSON);

  }
      
      ?>