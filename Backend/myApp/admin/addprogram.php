 <?php

include "api.php";
 include "db.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $prog = $request->program;
    
        
      
        
        
        
    }
        
       

  



       


$sql="INSERT INTO Program(Program_name)
VALUES ('$prog')";
$result = $link->query($sql);
if($result){
echo 1;
    
}
else
{
       echo "Error: " . $sql. "<br>" . mysqli_error($link);
}



?>