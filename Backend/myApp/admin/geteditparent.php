 <?php

include "api.php";
include "db.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->gid;
        
       
    }
  




 $sqlselect = "SELECT p.cnic, p.fname,p.lname,p.email,p.password,p.Username,p.address,p.contact_no FROM Parent as p 
WHERE p.guardianNo='$id'";
$result = $link->query($sqlselect);
class user{
    public $cnic;
    public $email;
    public $password;
    public $username;
    public $address;
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
            $test->email=$row["email"];
            $test->password=$row["password"];
            $test->username=$row["Username"];
            $test->address=$row["address"];
            $test->contactNo=$row["contact_no"];
            
          //  $test->section=$row["sectionID"];
            $test1[]= $test;
        }
      
        $myJSON = json_encode($test1);
           print_r($myJSON);
  
      
      
       $test1 = array();
?>
