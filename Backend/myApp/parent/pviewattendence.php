<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";


$postdata = file_get_contents("php://input");
  if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->stid;
      $cid = $request->cid;

    
      
     $sqlselect = "SELECT s.first_name,s.last_name,a.Date,a.Att_status FROM Attendence as a INNER JOIN std_course_sec as scs on a.std_course_sec_fk=scs.scs_id INNER JOIN Student as s on s.student_id=scs.student_fk INNER JOIN courseSection AS cs on cs.coursesec_id=scs.course_sec_fk INNER JOIN batch_sem_course as bsc on bsc.batch_sem_course_id=cs.batch_sem_course_fk INNER JOIN course as c on c.course_id=bsc.course_fk WHERE s.student_id='$id' AND c.course_id='$cid'";
      
      
      
       $result = $link->query($sqlselect);
     
  class viewattendence{
   public $fname;
   public $lname;
   public $date;
    public $status;

  }
       
      $test1=array();
       while($row=mysqli_fetch_assoc($result)){
           
            $test=new viewattendence();
      
      $test->fname=$row["first_name"];
        $test->lname=$row["last_name"];
        $test->date=$row["Date"];
        $test->status=$row["Att_status"];
             
      
           
         
           
           
            
       $test1[]= $test;
      
    }
      
       $myJSON = json_encode($test1);
     print_r($myJSON);
  
      
      
       $test1 = array();
            

       
      
  }


?>