<?php
include "config.php";
  
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$studentname = $data['studentname'];
$class_id = $data['cid'];
$sid = $_GET['sid'];


$q = mysqli_query($conn, "UPDATE student_list SET studentname='$studentname', cid='$class_id' WHERE sid = '$sid' LIMIT 1");


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