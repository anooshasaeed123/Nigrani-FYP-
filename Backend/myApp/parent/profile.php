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

$sqlselect="select p.cnic,p.fname,p.lname,p.email,p.contact_no,p.address,s.first_name,s.last_name FROM Parent as p INNER JOIN Student as s on s.parent_fk=p.parent_id

where p.parent_id='$id'";
   $result = $link->query($sqlselect);


class profile{
   public $fname;
   public $lname;
   public $address;

   public $phone;
   public $email;
   public $cnic;
    public $sfname;
    public $slname;
  
}
   
         

$profile1[]=array();
     while($row=mysqli_fetch_assoc($result)){
           
 
 
         

           $profile=new profile();
      
      $profile->fname=$row["fname"];
         $profile->lname=$row["lname"];
         $profile->address=$row["address"];
          
             $profile->phone=$row["contact_no"];
         $profile->email=$row["email"];
         $profile->cnic=$row["cnic"];
          $profile->sfname=$row["first_name"];
          $profile->slname=$row["last_name"];
         
         
           
            
           
         }


       $myJSON = json_encode($profile);
   print_r($myJSON);



?>