 <?php

include "api.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $prog= $request->program;
        $batch=$request->batch;
       
        
       
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
 $sqlselect = "SELECT sm.semester,sm.semester_id FROM Batch as b INNER JOIN batchProgram as bp on bp.batch_fk=b.batch_id INNER JOIN Program as p on bp.program_fk=p.Program_id INNER JOIN batchSemester as bs on bp.Batchprogram_id=bs.batchProgram_fk INNER JOIN semester as sm on sm.semester_id=bs.semester_fk
WHERE p.Program_name='$prog' AND b.batch_year='$batch'";
$result = $link->query($sqlselect);
class user{
   public $semestre_id;
   public $semester_name;
  
}
//$row = mysqli_fetch_row($result);
$test1=array();
       while($row=mysqli_fetch_assoc($result)){
           
           $test=new user();
            $test->semestre_id=$row['semester_id'];
            $test->semester_name=$row["semester"];
            
          //  $test->section=$row["sectionID"];
            $test1[]= $test;
        }
      
        $myJSON = json_encode($test1);
           print_r($myJSON);
  
      
      
       $test1 = array();
?>