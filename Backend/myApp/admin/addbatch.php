 <?php

include "api.php";
 include "db.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $prog = $request->program;
       $batchname= $request->batch;
      
        
      
        
        
        
    }
        
       

  



       


$sql="INSERT INTO Batch(batch_year)
VALUES ('$batchname')";
$result = $link->query($sql);
if($result){
echo 1;
     $last_id = $link->insert_id;
}
else
{
       echo "Error: " . $sql. "<br>" . mysqli_error($link);
}

$sql1="INSERT INTO batchProgram(program_fk,batch_fk)
VALUES ('$prog','$last_id')";
    $result = $link->query($sql1);
if($result){
echo 1;
    
}
else
{
       echo "Error: " . $sql. "<br>" . mysqli_error($link);
}


?>