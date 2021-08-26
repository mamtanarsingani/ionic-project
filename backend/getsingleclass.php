<?php 

include "config.php";

   $data = array();
   $class_id = $_GET['cid'];
   $q = mysqli_query($conn, "SELECT * FROM classes WHERE cid = '$class_id' LIMIT 1");

   while ($row = mysqli_fetch_object($q)){
       $data[] = $row; 
   }

   echo json_encode($data);
echo mysqli_error($conn);
