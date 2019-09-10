<?php

include "api.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $fname = $request->fname;
        $lname = $request->lname;
        $address=$request->address;   
        $cnic=$request->cnic;
        $email=$request->email;
        $password=$request->password;
        $phone=$request->phone;
        $username = $request->username;
        $adminid = $request->adminID;
        $designation = $request->Desig;

       
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
//else echo"yes";
// $sql="INSERT INTO parent_tbl(cnic, firstName, Lastname, email, username, password, address,contactno) VALUES ('$cnic','$firstName','$LastName','$email','$parentusername','$password','$address','$contactno')";
// $result = $link->query($sql);
// if($result){
//     echo "yes";
// }
$sql="UPDATE Teacher SET fname ='$fname',lname='$lname',designation='$designation',address='$address',contact_no='$phone',email='$email',username='$username',password='$password',admin_fk='$adminid' WHERE cnic='$cnic'";
$result = $link->query($sql);
if($result){
     echo "yes";
}
?>