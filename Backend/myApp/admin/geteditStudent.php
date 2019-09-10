 <?php

include "api.php";
include "db.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->sid;
        
       
    }
  




 $sqlselect = "SELECT s.first_name,s.last_name,s.email,s.Address,s.gender,s.date_of_birth,s.std_cnic FROM Student as s WHERE s.roll_number='$id'";
$result = $link->query($sqlselect);
class user{
    public $cnic;
    public $email;
 
   
    public $address;
  
   public $fname;
   public $lname;
    public $gender;
    public $dob;

  
}
//$row = mysqli_fetch_row($result);
$test1=array();
       while($row=mysqli_fetch_assoc($result)){
           
           $test=new user();
            $test->fname=$row["first_name"];
            $test->lname=$row["last_name"];
            $test->cnic=$row["std_cnic"];
            $test->email=$row["email"];
          
            $test->address=$row["Address"];
            $test->gender=$row["gender"];
             $test->dob=$row["date_of_birth"];
            
          //  $test->section=$row["sectionID"];
            $test1[]= $test;
        }
      
        $myJSON = json_encode($test1);
           print_r($myJSON);
  
      
      
       $test1 = array();
?>
