<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";



$postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $aid= $request->aid;
         $password = $request->password;
         $question = $request->question;
         $answer = $request->answer;
        
   
 
      
    }


    

$sqlselect = "UPDATE Admin 
SET Admin.password='$password',Admin.sec_ans='$answer',Admin.security_ques_fk='$question'
WHERE Admin.Admin_id='$aid'";



if (mysqli_query($link, $sqlselect)) {
    echo "yup";
} 
else {
    echo "Error: " . $sqlselect. "<br>" . mysqli_error($link);
    
}












?>