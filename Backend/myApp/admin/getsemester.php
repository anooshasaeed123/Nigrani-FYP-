<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";


$postdata = file_get_contents("php://input");
  if (isset($postdata)) {
        $request = json_decode($postdata);
       
   
      
      
      $sql="SELECT sm.semester from semester as sm";
      
        $result = $link->query($sql);
      
      

 while($row=mysqli_fetch_assoc($result)){
           
           
      
       $semester[] =$row["semester"];
        
         }



 
        $myJSON = json_encode($semester);
   print_r($myJSON);

  }
      
      ?>