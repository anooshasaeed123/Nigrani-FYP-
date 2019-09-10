<?php
$now = new \DateTime('now');
   $month = $now->format('m');
   $strMonth=(string) $month;
   $year = $now->format('Y');
   echo $strYear=(string) $year;
   //echo $year;
  // echo $month;
  $link = mysqli_connect('40.65.178.216', 'root', 'Myproject2018');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
//echo 'Connected successfully';
$db=mysqli_select_db($link,"adminsu");
if(!$db)
{
    echo "sorry";
}
$sqlselect = "SELECT challan_table.issueDate  as idate from challan_table";
$result = $link->query($sqlselect);
$supply=$result->fetch_all(MYSQLI_ASSOC);


foreach ($supply as $item) {
$dbMonth= substr($item['idate'],0,2);
if($dbMonth==$strMonth)	
echo $item['idate'];
}
?>