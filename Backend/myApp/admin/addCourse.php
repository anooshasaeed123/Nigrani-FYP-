 <?php

include "api.php";
 include "db.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $name = $request->courseName;
       $coursecode= $request->coursecode;
        $credithours=$request->credithours;
        
      
        
        
        
    }
        
       

  



       


$sql="INSERT INTO course(course_name,course_code,credit_hours) VALUES ('$name','$coursecode','$credithours')";
$result = $link->query($sql);
if($result){
echo "yup";
}
else
{
    echo "not";
}

?>