<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";


$postdata = file_get_contents("php://input");
  if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->user_id;
      
        $attendence = $request->attendence;
      
    
    
      
      $rollnumber= $attendence[0][0]->rollnumber;
       $status= $attendence[0][0]->status;
     $course= $attendence[0][0]->course;
       $date= $attendence[0][0]->date;
//      
//      echo $rollnumber;
//      echo $status;
//      echo $course;
//      echo $date;
//      
      
 $sql=     "INSERT INTO Attendence(course_teacher_fk,std_course_sec_fk,Date,Att_status)
SELECT ct.courseTeacher_id,scs.scs_id,'$date','$status' FROM CourseTeacher as ct INNER JOIN Teacher as t on t.id=ct.teacher_fk INNER JOIN courseSection as cs on cs.coursesec_id=ct.course_sec_fk INNER JOIN std_course_sec as scs on scs.course_sec_fk=cs.coursesec_id INNER JOIN Student as s on s.student_id=scs.student_fk INNER JOIN batch_sem_course as bsc on bsc.batch_sem_course_id=cs.batch_sem_course_fk INNER JOIN course as c on c.course_id=bsc.course_fk
where s.roll_number='$rollnumber' AND c.course_name='$course'";
      
      
      
//$sql="INSERT INTO Attendence(course_teacher_fk,std_course_sec_fk,Date,Att_status) 
//SELECT ct.courseTeacher_id,scs.scs_id,'$date','$status' FROM CourseTeacher as ct INNER JOIN Teacher as t on t.id=ct.teacher_fk INNER JOIN courseSection AS cs on cs.coursesec_id=ct.course_sec_fk
//
//
//INNER JOIN std_course_sec as scs on scs.course_sec_fk=cs.coursesec_id INNER JOIN Student as s on s.student_id=scs.student_fk 
//INNER JOIN batch_sem_course as bsc on cs.batch_sem_course_fk=bsc.batch_sem_course_id INNER JOIN batchSemester as bs on bsc.batchSemester_fk=bs.batchsem_id INNER JOIN course as c on c.course_id=bsc.batchSemester_fk
//
//WHERE s.roll_number='$rollnumber' AND c.course_name='$course'";



if (mysqli_query($link, $sql)) {
    echo "attendence added successfully";
} 
else {
    echo "Error: " . $sql . "<br>" . mysqli_error($link);
    
}




      
      
  }


?>