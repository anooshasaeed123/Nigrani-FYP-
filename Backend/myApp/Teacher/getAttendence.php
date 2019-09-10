<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";



$postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $date = $request->date;
        $cid = $request->cid;
        
        
        
$sql="SELECT s.roll_number, s.first_name,s.last_name, att.Att_status FROM Student AS s INNER JOIN std_course_sec as scs on scs.student_fk=s.student_id INNER JOIN Attendence as att on att.std_course_sec_fk=scs.scs_id INNER JOIN courseSection as cs on cs.coursesec_id=scs.course_sec_fk INNER JOIN CourseTeacher as ct on ct.course_sec_fk=cs.coursesec_id



WHERE att.Date='$date'
AND ct.courseTeacher_id='$cid'";
       
    $result = $link->query($sql);
      
      class student{
    
    public $fname;
    public $lname;
    public $rollnumber;
    public $status;
    
    
}
  
   $student1=array();
while($row=mysqli_fetch_assoc($result)){
    
    $student=new student();
    
    $student->fname = $row["first_name"];
     $student->lname = $row["last_name"];
     $student->rollnumber = $row["roll_number"];
    $student->status= $row["Att_status"];
    
    
      $student1[]= $student;
    
    
}
      
      $myJSON = json_encode($student1);
     print_r($myJSON);
  
      
      
       $student1 = array();
      
      
      
 
      
    }


?>
