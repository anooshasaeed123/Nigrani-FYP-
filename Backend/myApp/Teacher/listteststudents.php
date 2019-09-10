<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";


$postdata = file_get_contents("php://input");
  if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->testid;
    
      
     $sqlselect = "SELECT s.first_name,s.last_name,s.roll_number,ti.total_marks,ti.weightage FROM Student as s inner JOIN std_course_sec as scs on scs.student_fk = s.student_id INNER JOIN courseSection as cs on cs.coursesec_id = scs.course_sec_fk INNER JOIN batch_sem_course as bsc on cs.batch_sem_course_fk = bsc.batch_sem_course_id INNER JOIN course as c on c.course_id=bsc.course_fk INNER JOIN batchSemester as bs on bs.batchsem_id=bsc.batchSemester_fk INNER JOIN section as se on cs.sec_fk=se.sec_id INNER JOIN CourseTeacher AS ct on ct.course_sec_fk=cs.coursesec_id INNER JOIN Test_info as ti on ct.courseTeacher_id=ti.course_teacher_fk WHERE ti.test_id='$id'";
      
      
      
       $result = $link->query($sqlselect);
     
  class teststudent{
   public $fname;
   public $lname;
   public $rollnumber;
   public $totmarks;
    public $weightage;
 
  }
       
      $test1=array();
       while($row=mysqli_fetch_assoc($result)){
           
            $test=new teststudent();
      
      $test->fname=$row["first_name"];
        $test->lname=$row["last_name"];
        $test->rollnumber=$row["roll_number"];
        $test->totmarks=$row["total_marks"];
             $test->weightage=$row["weightage"];
      
           
         
           
           
            
       $test1[]= $test;
          // array_push($test1,$test);
         }
      
       $myJSON = json_encode($test1);
     print_r($myJSON);
  
      
      
       $test1 = array();
            

       
      
  }


?>