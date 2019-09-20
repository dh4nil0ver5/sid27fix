$(document).ready(function(){
    $("#btnLogin").click(function(){
        var formData = $("#frmLogin").serializeArray();
        var urlData = $("#frmLogin").attr('action');
        Swal.fire({
            title: 'Login Confrimation',
            text: "Are you sure ?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, just login !'
        }).then((result) => {
            if (result.value) { 
                $.ajax({
                    url: urlData,
                    data: formData,
                    type: 'post',
                    dataType: 'json',
                    success: function(json){
                        var type_level = 0;
                        if (json['status'] = 200) {
                            type_level = json['data'].id_level;
                            if (type_level == 1) {
                                location.href="page/sm/index.html";
                            } else if(type_level == 2){
                                location.href="page/";
                            }else if(type_level == 3){
                                location.href="page/";
                            } 
                        } else {
                            
                        }
                    }
                }); 
            } else {
                Swal.fire(
                    'Check my account !', '', 'success'
                )
            }
        });
    });
});
function load_booking() {
    location.href="booking.html";
}
function load_transaksi(){
    location.href="transaksi.html";
}
function load_laporan() {
    location.href="laporan.html";
}
function load_role() {
    location.href="role.html";
}