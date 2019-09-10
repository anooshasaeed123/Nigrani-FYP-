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
         $empid= $request->emdid;
        $qual=$request->qualification;
        
        //$imageFromionic=$request->image;
        

       
//   include "db.php";

        // if ($name != "" && $course != "") {
            
        //     //$found=true;
        //     echo "Server returns: " . $name.$course.$address.$section.$cnic.$address.$email.$password.$phone;
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
$sql="INSERT INTO Teacher(fname,lname,emp_id,designation,Qualification,address,email, username,password,contact_no,cnic,admin_fk) VALUES ('$fname','$lname','$empid','$designation','$qual','$address','$email','$username','$password','$phone','$cnic','$adminid')";
$result = $link->query($sql);
if($result){
    echo "yup";
}
else
{
    echo "Error: " . $sql. "<br>" . mysqli_error($link);
}

?>