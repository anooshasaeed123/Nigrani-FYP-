<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";



$postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $pid= $request->pid;
         $password = $request->password;
         $question = $request->question;
         $answer = $request->answer;
        
   
 
      
    }


    

$sqlselect = "UPDATE Parent 
SET Parent.password='$password',Parent.sec_ans='$answer',Parent.security_ques_fk='$question'
WHERE Parent.parent_id='$pid'";



if (mysqli_query($link, $sqlselect)) {
    echo "yup";
} 
else {
    echo "Error: " . $sqlselect. "<br>" . mysqli_error($link);
    
}












?>