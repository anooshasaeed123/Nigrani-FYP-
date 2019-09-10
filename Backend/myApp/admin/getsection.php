<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";


$postdata = file_get_contents("php://input");
  if (isset($postdata)) {
        $request = json_decode($postdata);

   
      
      
      $sql="SELECT sn.section_name FROM section as sn";
      
        $result = $link->query($sql);
      
      

 while($row=mysqli_fetch_assoc($result)){
           
           
      
       $section[] =$row["section_name"];
        
         }



 
        $myJSON = json_encode($section);
   print_r($myJSON);

  }
      
      ?>