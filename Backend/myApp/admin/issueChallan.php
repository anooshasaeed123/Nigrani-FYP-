 <?php

include "api.php";
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $prog =$request->prog;
        $batch =$request->batch;
        $sem =$request->sem;

        $registerationFee =$request->regFee; 
        $tuitionFee=$request->tuiFee;
       
        $challanIssueDate=$request->challanIssueDate;
        $challanSubmissionDate=$request->challanSubmissionDate;
        $chllanIssuedBy1=$request->chllanIssuedBy;
        
       
        
        $subIssueDate= substr($challanIssueDate,0,10);
        $subIssueDate1 = str_replace('-', '/', $subIssueDate);
        $actualchallanIssueDate = date('m-d-Y',strtotime($subIssueDate1 . "+1 days"));

        $subSubmissionDate= substr($challanSubmissionDate,0,10);
        $subSubmissionDate1 = str_replace('-', '/', $subSubmissionDate);
        $actualchallanSubmissionDate = date('m-d-Y',strtotime($subSubmissionDate1 . "+1 days"));

      // echo $actualchallanIssueDate.$registerationFee.$tuitionFee.$actualchallanSubmissionDate.$chllanIssuedBy1.$studentid.$finee.$finefor.$challanStatus;
       
//   include "db.php";

        // if ($firstName != "" && $LastName != "") {
            
        //     //$found=true;
        //     echo "Server returns: " . $firstName.$LastName.$rollno.$address.$actualdate.$stdbatch.$stdgender.$stdsection.$stdparentcnic.$stdparentid;
        //     //echo "server returns: ". $dob;
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

$sqlbatchsem="SELECT batchSemester.batchsem_id as bsid FROM batchSemester INNER JOIN semester on semester.semester_id=batchSemester.semester_fk INNER JOIN batchProgram on batchProgram.Batchprogram_id=batchSemester.batchProgram_fk INNER JOIN Batch on Batch.batch_id=batchProgram.batch_fk INNER JOIN Program on Program.Program_id=batchProgram.program_fk WHERE Program.Program_id='$prog' and Batch.batch_id='$batch' and semester.semester_id='$sem' ";
$resultsqlbatchsem = mysqli_query($link, $sqlbatchsem);
 if (mysqli_num_rows($resultsqlbatchsem) > 0) {
      while($row = mysqli_fetch_assoc($resultsqlbatchsem)) {
        // echo $row["course_id"];
        $fetchedbatchsemid=$row['bsid'];
      }
   }




$sql="INSERT INTO challan(registerationFee ,tuitionFee,issueDate,subDate,issuedBy,batch_sem_fk) VALUES ('$registerationFee','$tuitionFee','$actualchallanIssueDate','$actualchallanSubmissionDate','$chllanIssuedBy1','$fetchedbatchsemid')";
$result = $link->query($sql);
if($result){
    echo "yup";
}
else
{
    echo "not";
}

?>