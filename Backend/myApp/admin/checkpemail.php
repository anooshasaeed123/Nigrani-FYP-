<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";


$postdata = file_get_contents("php://input");
  if (isset($postdata)) {
        $request = json_decode($postdata);
      
      $email=$request->email;
      
  }
       
   if($email != ''){
       
       
       
       
      $sql="select count(*) as allcount FROM Parent as t WHERE t.email='$email'";
      
        $result = $link->query($sql);
      
             $row = mysqli_fetch_array($result);

 $resText = "Available";
 if($row['allcount'] > 0){
  $resText = 'Not available';
 }
       
       
       echo $resText;
       
       
       
       
   }
      
      
      
      
      
      
      
      
      


      
      ?>