<?php
include '../config/koneks.php';

$data = mysqli_query($koneksi, "select * from booking");
$booking = mysqli_fetch_array($data);
if ($booking) {
    # code...
    echo json_encode(array('status'=>200, 'data'=>$booking));
} else {
    # code...
    echo json_encode(array('status'=>400, 'data'=>false));
}