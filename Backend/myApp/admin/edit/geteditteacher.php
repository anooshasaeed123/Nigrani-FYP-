 <?php

include "api.php";
include "db.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->id;
        
       
    }
  




 $sqlselect = "SELECT t.fname,t.lname,t.designation,t.Qualification,t.address,t.email,t.contact_no,t.cnic FROM Teacher as t
WHERE t.emp_id='$id'";
$result = $link->query($sqlselect);
class user{
    public $cnic;
    public $email;
    public $designation;
   public $address;
    public $qual;
    public $contactNo;
   public $fname;
   public $lname;

  
}
//$row = mysqli_fetch_row($result);
$test1=array();
       while($row=mysqli_fetch_assoc($result)){
           
           $test=new user();
            $test->fname=$row["fname"];
            $test->lname=$row["lname"];
            $test->cnic=$row["cnic"];
            $test->designation=$row["designation"];
            $test->qual=$row["Qualification"];
            $test->email=$row["email"];
            
            $test->address=$row["address"];
            $test->contactNo=$row["contact_no"];
            
          //  $test->section=$row["sectionID"];
            $test1[]= $test;
        }
      
        $myJSON = json_encode($test1);
           print_r($myJSON);
  
      
      
       $test1 = array();
?>
