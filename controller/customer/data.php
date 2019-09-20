<?php
include '../config/koneks.php';

$data = mysqli_query($koneksi, "select * from is_users");
$cust = mysqli_fetch_array($data);
if (condition) {
    # code...
    echo json_encode(array('status'=>200, 'data'=>$cust));
} else {
    # code...
    echo json_encode(array('status'=>200, 'data'=>$cust));
}
