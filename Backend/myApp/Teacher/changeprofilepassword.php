<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";



$postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $tid= $request->tid;
         $password = $request->password;
         $question = $request->question;
         $answer = $request->answer;
        
        //echo $email;
      
      
    }


    

$sqlselect = "UPDATE Teacher 
SET Teacher.password='$password',Teacher.sec_ans='$answer',Teacher.security_ques_fk='$question'
WHERE Teacher.id='$tid'";



if (mysqli_query($link, $sqlselect)) {
    echo "yup";
} 
else {
    echo "Error: " . $sqlselect . "<br>" . mysqli_error($link);
    
}












?>