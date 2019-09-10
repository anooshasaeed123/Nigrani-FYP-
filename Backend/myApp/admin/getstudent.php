<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";


$postdata = file_get_contents("php://input");
  if (isset($postdata)) {
        $request = json_decode($postdata);
     $rollnumber=$request->rollnumber;
      
   
      
      
      $sql="SELECT Student.Student_id,Student.first_name,Student.last_name,Student.roll_number FROM Student
WHERE Student.roll_number='$rollnumber'";
      
        $result = $link->query($sql);
      
      
      
      class user{
           public $id;
   public $fname;
   public $lname;
 public $rollnumber;
  
}
//$row = mysqli_fetch_row($result);
$test1=array();
       while($row=mysqli_fetch_assoc($result)){
           
           $test=new user();
           $test->id=$row['Student_id'];
            $test->fname=$row['first_name'];
            $test->lname=$row["last_name"];
            $test->rollnumber=$row["roll_number"];
            
          //  $test->section=$row["sectionID"];
            $test1[]= $test;
        }
      
        $myJSON = json_encode($test1);
           print_r($myJSON);
  
      
      
       $test1 = array();
      
      
  }
      ?>