<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";


$postdata = file_get_contents("php://input");
  if (isset($postdata)) {
        $request = json_decode($postdata);
     
   
      
      
      $sql="SELECT b.batch_id, b.batch_year FROM  Batch as b";
      
        $result = $link->query($sql);
      
      
class batch{
    
    public $batch;
    public  $id;
    
    
    
}
$batch1=array();

 while($row=mysqli_fetch_assoc($result)){
     
       $batch=new batch();
    
 
    
    $batch->batch=$row["batch_year"];
      $batch->id=$row["batch_id"];
     $batch1[]=$batch;
        
         }
        $myJSON = json_encode($batch1);
   print_r($myJSON);

  }
      
      ?>