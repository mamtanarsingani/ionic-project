<?php 

include "config.php";

   $data = array();
   $sid = $_GET['sid'];
   $q = mysqli_query($conn, "SELECT * FROM student_list WHERE sid = '$sid' LIMIT 1");

   while ($row = mysqli_fetch_object($q)){
       $data[] = $row; 
   }

   echo json_encode($data);
echo mysqli_error($conn);
