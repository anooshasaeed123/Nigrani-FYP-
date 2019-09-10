 <?php

include "api.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $courseID = $request->course;
        $section = $request->section;
        $prog =$request->program;
        $batch =$request->batch;
        $sem =$request->semester;  
        
        
//       


        
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
//
$sql="INSERT INTO batch_sem_course(batchSemester_fk,course_fk)
SELECT batchsem_id,'$courseID' FROM batchSemester as bs INNER JOIN semester as sm on sm.semester_id=bs.semester_fk INNER JOIN batchProgram as bp on bp.Batchprogram_id=bs.batchProgram_fk INNER JOIN Program as p on p.Program_id=bp.program_fk INNER JOIN Batch
as b on b.batch_id=bp.batch_fk 

WHERE p.Program_id='$prog' AND b.batch_id='$batch' AND sm.semester_id='$sem'" ;


$result = $link->query($sql);
if($result){
    echo 1;
    
     $last_id = $link->insert_id;
     //echo $last_id;
}
else
{
    echo "Error: " . $sql. "<br>" . mysqli_error($link);
}

$length = sizeof($section);

for($i=0;$i<$length;$i++){
    
       $sql1="INSERT INTO courseSection(batch_sem_course_fk, sec_fk) 
SELECT '$last_id',section.sec_id FROM section WHERE
section.section_name='$section[$i]'";
     $result = $link->query($sql1);
 
  
    
    
  
    
    
}


   
if($result){
    echo 1;
    
     $last_id1 = $link->insert_id;
    // echo $last_id1;
}
else
{
    echo "Error: " . $sql1. "<br>" . mysqli_error($link);
}
  
    

    
    
    



?>