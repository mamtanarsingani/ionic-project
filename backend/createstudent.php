<?php
include "config.php";
 
$input =file_get_contents('php://input');
$data =json_decode($input,true);
$message =array();
$studentname = $data['studentname'];
$classid = $data['cid'];

$q = mysqli_query($conn, "INSERT INTO student_list (studentname,cid) VALUES ('$studentname', '$classid')");

//$sql = "INSERT INTO persons (first_name, last_name, email) VALUES ('Peter', 'Parker', 'peterparker@mail.com')";


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