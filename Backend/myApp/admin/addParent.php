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
         $guardianid=$request->guardianid;
        //$imageFromionic=$request->image;
        




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
$sql="INSERT INTO Parent(cnic,guardianNo, fname, lname, Username,password,email, contact_no,address,admin_fk) VALUES ('$cnic','$guardianid','$firstName','$LastName','$parentusername','$password','$email','$contactno','$address','$adminid')";


if (mysqli_query($link, $sql)) {
    echo 1;
} 
else {
    echo "Error: " . $sql . "<br>" . mysqli_error($link);
    
}
        
    }

?>