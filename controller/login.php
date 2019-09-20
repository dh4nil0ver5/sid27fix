<?php
include '../config/koneksi.php'; 
$email = $_POST['email'];
$password = $_POST['password'];
$query = mysqli_query($koneksi, "SELECT * FROM is_users a 
INNER JOIN is_hakakses b ON a.hak_akses=a.hak_akses
WHERE a.email='".$email."' 
GROUP BY a.id_user");
 
if (!$query) {
    # code...
    $data = array('status' => 400, 'data' => false);
    echo json_encode();
} else {
    # code...
    $row = mysqli_fetch_array($query);
    // print_r($row);
    $users= array(
        'username' => $row['username'],
        'id_level' => $row['id'],
        'keterangan' => $row['keterangan']);
        //  
    $data = array('status' => 200, 'data' => $users);
    echo json_encode($data);
}
