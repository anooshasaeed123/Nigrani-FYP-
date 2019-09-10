<?php

include "api.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $adminid = $request->adminid;
        $firstName = $request->fname;
        $LastName =$request->lname; 
        $email=$request->std_email;
        $username=$request->std_username;
        $password=$request->std_password;
        $program=$request->program;
        $rollno=$request->std_rollno;
        $address=$request->std_address;
        $gender=$request->gender;
        $date=$request->date;
        $stdcnic=$request->std_cnic;
        $prntcnic=$request->parent_cnic;

        
        $subdob= substr($date,0,10);
        $date1 = str_replace('-', '/', $subdob);
        $actualdate = date('m-d-Y',strtotime($date1 . "+1 days"));

       
   // include "db.php";

      
        
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
$queryParentID = "SELECT * FROM Parent WHERE cnic='$prntcnic'";
$resultParentID = mysqli_query($link, $queryParentID);
 if (mysqli_num_rows($resultParentID) > 0) {
      while($row = mysqli_fetch_assoc($resultParentID)) {
        // echo $row["course_id"];
      $fetchedParentID=$row["parent_id"];
        
      }
  }
 
$sql="UPDATE Student SET first_name ='$firstName',last_name ='$LastName',Username='$username',password='$password',roll_number='$rollno',program_fk='$program',parent_fk='$fetchedParentID',admin_fk='$adminid',Address='$address',email='$email',gender='$gender',date_of_birth='$actualdate' WHERE std_cnic='$stdcnic'";
$result = $link->query($sql);
if($result){
     echo "yes";
}
?>