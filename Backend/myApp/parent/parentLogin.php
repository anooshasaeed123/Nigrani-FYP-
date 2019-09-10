<?php


if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
 
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
 
        exit(0);
    }
 
 
    //http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
    $found="false";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $email= $request->email;
        $password =$request->password; 


 
    //     if ($username != "" && $password != "") {
    
    }
    else {
        echo "Not called properly with username parameter!";
    }

$found=  "false";

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

$found = "false";

$sqlselect = "SELECT parent_id as pid FROM Parent where email='$email' and password='$password'";

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