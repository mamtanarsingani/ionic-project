<?php
include "config.php";
  
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$classlist = $data['class_list'];
$class_id = $_GET['cid'];



$q = mysqli_query($conn, "UPDATE classes SET class_list='$classlist' WHERE cid = '$class_id' LIMIT 1");


if($q)
{
    http_response_code(201);
    $message['status'] = "success";
}else

{
    http_response_code(422);
    $message['status'] = "error";
}

echo json_encode($message);
echo mysqli_error($conn);