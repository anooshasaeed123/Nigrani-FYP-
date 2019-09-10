<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";

$postdata = file_get_contents("php://input");

     if (isset($postdata)) {
        $request = json_decode($postdata);
        $id = $request->user_id;
       // echo $id;
 
      
    }

$sqlselect="SELECT t.fname,t.designation,t.lname,t.address,t.email,t.contact_no,t.cnic FROM Teacher AS t WHERE t.id='$id'";
   $result = $link->query($sqlselect);


class profile{
   public $fname;
   public $lname;
   public $address;
  public $designation;
   public $phone;
   public $email;
   public $cnic;
  
}
   
         

$profile[]=array();
     while($row=mysqli_fetch_assoc($result)){
           
 
 
         

           $profile=new profile();
      
      $profile->fname=$row["fname"];
         $profile->lname=$row["lname"];
         $profile->address=$row["address"];
          $profile->designation=$row["designation"];
             $profile->phone=$row["contact_no"];
         $profile->email=$row["email"];
         $profile->cnic=$row["cnic"];
           
            
           
         }


       $myJSON = json_encode($profile);
   print_r($myJSON);



?>