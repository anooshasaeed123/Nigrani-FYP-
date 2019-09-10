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


    

$sqlselect = "UPDATE Parent as p

SET p.password='$password'
WHERE p.email='$email'";



if (mysqli_query($link, $sqlselect)) {
    echo "yup";
} 
else {
    echo "Error: " . $sql . "<br>" . mysqli_error($link);
    
}












?>