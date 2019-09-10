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
     $rollno=$request->std_rollno;
        $address=$request->std_address;
        $gender=$request->gender;
        $date=$request->date;
        $stdcnic=$request->std_cnic;
        $gid=$request->Guardianid;
        $program=$request->program;

        
        


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




$queryParentID = "SELECT * FROM Parent WHERE guardianNo='$gid'";
$resultParentID = mysqli_query($link, $queryParentID);
 if (mysqli_num_rows($resultParentID) > 0) {
      while($row = mysqli_fetch_assoc($resultParentID)) {
        // echo $row["course_id"];
      $fetchedParentID=$row["parent_id"];
        
      }
  }


; 





$sql="INSERT INTO Student(first_name, last_name, Username, password, roll_number, program_fk, parent_fk, admin_fk, Address, email,gender,date_of_birth,std_cnic) 
select '$firstName','$LastName','$username','$password','$rollno',p.Program_id,'$fetchedParentID','$adminid','$address','$email','$gender','$date','$stdcnic' FROM  Program as p 
WHERE p.Program_name='$program'";


if (mysqli_query($link, $sql)) {
    
   echo "yup";
} 
else {
    echo "Error: " . $sql . "<br>" . mysqli_error($link);
}




    
?>