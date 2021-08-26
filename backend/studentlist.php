<?php 

include "config.php";

   $data = array();
   $class_id = $_GET['cid'];
   $q = mysqli_query($conn, "SELECT * FROM student_list RIGHT JOIN classes ON student_list.cid = classes.cid WHERE classes.cid='$class_id'");
  
   while ($row = mysqli_fetch_object($q)){
       $data[] = $row; 
   }

   echo json_encode($data);
echo mysqli_error($conn);