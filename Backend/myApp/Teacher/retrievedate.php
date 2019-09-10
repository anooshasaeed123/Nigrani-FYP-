<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";


$postdata = file_get_contents("php://input");
  if (isset($postdata)) {
        $request = json_decode($postdata);
        $cid = $request->cid; 
      
      
   
      
      
      $sql="SELECT distinct a.Date from Attendence as a where a.course_teacher_fk='$cid'";
      
        $result = $link->query($sql);
      
      

 while($row=mysqli_fetch_assoc($result)){
           
           
      
       $date[] =$row["Date"];
        
         }

if ($date){
    $myJSON = json_encode($date);
   print_r($myJSON);
        
  
}
      else
      {
          return null;

           
      }

  }
      
      ?>