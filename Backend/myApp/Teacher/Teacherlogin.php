<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";



$postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $email = $request->email;
         $password = $request->password;
 
      
    }


    


$found = "false";
$sqlselect = "SELECT id, username, password FROM Teacher where email='$email' and password='$password'";

$result = $link->query($sqlselect);
$row = mysqli_fetch_row($result);
if ($result->num_rows ==1) {
  
    $found="true";
  
    $id=$row[0];
   
    
  class User{
   public $status;
   public $id1;
  
} 
    $result= new user();
    $result->status=$found;
     $result->id1=$id;
    
    
    $myJSON = json_encode($result);
    echo $myJSON;
    
} 
else 

{
   echo false;

}










?>