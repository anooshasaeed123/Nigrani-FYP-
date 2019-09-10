<?php
$link = mysqli_connect('40.65.178.216', 'root', 'Myproject2018');
if (!$link) {
    die('Could not connect: ' . mysqli_connect_error());
}

  

$db=mysqli_select_db($link,"ParentPortal");
if(!$db)
{
	echo "sorry";
}

    



?>