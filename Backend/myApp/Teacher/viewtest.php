<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";


$postdata = file_get_contents("php://input");
  if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->testid;

    
      
     $sqlselect = "SELECT s.first_name,s.last_name,s.roll_number,r.obt_marks,ti.total_marks,r.status,r.Ob_weightage,ti.weightage from Student as s INNER JOIN std_course_sec as scs on scs.student_fk=s.student_id INNER JOIN result as r on r.std_course_sec_fk=scs.scs_id INNER JOIN Test_info as ti on ti.test_id=r.test_info_fk WHERE ti.test_id='$id'";
      
      
      
       $result = $link->query($sqlselect);
     
  class viewtestmarks{
   public $fname;
   public $lname;
   public $rollnumber;
    public $obmarks;
   public $totmarks;
     public $status;
      public $weightage;
      public $tweightage;
 
  }
       
      $test1=array();
       while($row=mysqli_fetch_assoc($result)){
           
            $test=new viewtestmarks();
      
      $test->fname=$row["first_name"];
        $test->lname=$row["last_name"];
        $test->rollnumber=$row["roll_number"];
        $test->totmarks=$row["total_marks"];
             $test->obmarks=$row["obt_marks"];
              $test->status=$row["status"];
               $test->weightage=$row["Ob_weightage"];
             $test->tweightage=$row["weightage"];
      
           
         
           
           
            
       $test1[]= $test;
      
    }
      
       $myJSON = json_encode($test1);
     print_r($myJSON);
  
      
      
       $test1 = array();
            

       
      
  }


?>