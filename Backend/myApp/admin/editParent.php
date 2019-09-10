<?php

include "api.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $adminid = $request->adminID;
        $firstName = $request->fname;
        $LastName =$request->lname; 
        $email=$request->email;
        $password=$request->password;
        $parentusername=$request->username;
        $cnic=$request->cnic;
        $address=$request->address;
        $contactno=$request->contactno;

       
    include "db.php";

        // if ($firstName != "" && $LastName != "") {
            
        //     //$found=true;
        //     echo "Server returns: " . $firstName.$LastName.$email.$password.$parentusername.$address.$contactno;
        // }
        // else {
        //     echo "Empty firstName parameter!";
        // }
        
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
$sql="UPDATE Parent SET fname='$firstName',lname='$LastName',email='$email',Username='$parentusername',password='$password',address='$address',contact_no='$contactno',admin_fk='$adminid' WHERE cnic='$cnic'";
$result = $link->query($sql);
if($result){
     echo "yes";
}
else 
    echo "no";
?>