 <?php

include "api.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        // $id = $request->cid;
        
       
    }
    else {
        echo "Not called properly with username parameter!";
    } 


    $link = mysqli_connect('40.65.178.216', 'root', 'Myproject2018');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
//echo 'Connected successfully';
$db=mysqli_select_db($link,"adminsu");
if(!$db)
{
    echo "sorry";
}
//else echo"yes";
 $sqlselect = "SELECT section.sec_id as secid from section";
$result = $link->query($sqlselect);
class user{
   
   public $section_id;
  
}
//$row = mysqli_fetch_row($result);
$test1=array();
       while($row=mysqli_fetch_assoc($result)){
           
           $test=new user();
           // $test->teacher_name=$row["tname"];
            $test->section_id=$row["secid"];
            //$test->teacher_cnic=$row["tcnic"];
            
          //  $test->section=$row["sectionID"];
            $test1[]= $test;
        }
      
        $myJSON = json_encode($test1);
           print_r($myJSON);
  
      
      
       $test1 = array();
?>
