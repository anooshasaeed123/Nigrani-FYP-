 <?php

include "api.php";
 include "db.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $prog = $request->program;
   
      
        
      
        
        
        
    }
        
       

  



       


$sql="SELECT p.Program_name,b.batch_year,bp.Batchprogram_id FROM Batch as b INNER join batchProgram as bp on b.batch_id=bp.batch_fk INNER JOIN Program as p on p.Program_id=bp.program_fk
WHERE p.Program_id='$prog'";
$result = $link->query($sql);
class user{
   public $batch_id;
   public $batch_year;
  
}
//$row = mysqli_fetch_row($result);
$test1=array();
       while($row=mysqli_fetch_assoc($result)){
           
           $test=new user();
            $test->batch_id=$row['Batchprogram_id'];
            $test->batch_year=$row["batch_year"];
            
          //  $test->section=$row["sectionID"];
            $test1[]= $test;
        }
      
        $myJSON = json_encode($test1);
           print_r($myJSON);
  
      
      
       $test1 = array();



?>