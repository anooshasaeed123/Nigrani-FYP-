 <?php

include "api.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->id;
        
       
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
 $sqlselect = "SELECT student_id,first_name,last_name FROM Student where parent_fk='$id'";
$result = $link->query($sqlselect);
class user{
   public $fname;
   public $stdid;
     public $lname;
  
}
//$row = mysqli_fetch_row($result);
$test1=array();
       while($row=mysqli_fetch_assoc($result)){
           
           $test=new user();
            $test->fname=$row["first_name"];
            $test->stdid=$row["student_id"];
           $test->lname=$row["last_name"];
          //  $test->section=$row["sectionID"];
            $test1[]= $test;
        }
      
        $myJSON = json_encode($test1);
           print_r($myJSON);
  
      
      
       $test1 = array();
?>
