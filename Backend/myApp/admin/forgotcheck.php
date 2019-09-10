 <?php

include "api.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $question = $request->question;
        $email=$request->email;
        $answer=$request->answer;
        
        
      
        
       
    }
    else {
        echo "Not called properly with username parameter!";
    } 


    $link = mysqli_connect('40.65.178.216', 'root', 'Myproject2018');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
//echo 'Connected successfully';
$db=mysqli_select_db($link,"ParentPortal");
if(!$db)
{
    echo "sorry";
}
//else echo"yes";
 $sqlselect = "SELECT t.sec_ans,sq.question FROM Admin AS t INNER JOIN security_question as sq on sq.security_id=t.security_ques_fk
WHERE t.email='$email' AND sq.question='$question' AND t.sec_ans='$answer'";
$result = $link->query($sqlselect);
$row = mysqli_fetch_row($result);
if ($result->num_rows ==1) {
  
echo "yup";
   
    
}
else 
echo "not";

?>