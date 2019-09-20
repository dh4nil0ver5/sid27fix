<?php  
    $koneksi = mysqli_connect('localhost', 'root', '', 'i_db');
    if ($koneksi) {
        return $cek = true;
    } else {
        return $cek = false;
    } 