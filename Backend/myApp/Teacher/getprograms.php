<?php
include "api.php";
header('Access-Control-Allow-Origin: *'); 
include "db.php";


$sqlselect="SELECT Program.Program_name FROM Program";
   $result = $link->query($sqlselect);


 while($row=mysqli_fetch_assoc($result)){
           
           
      
       $programs[] =$row["Program_name"];
        
         }



  $myJSON = json_encode($programs);
   print_r($myJSON);



?>