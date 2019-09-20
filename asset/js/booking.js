$(document).ready(function(){
    loadBooking();
});
function show_tambah(){
    $("#pageBooking").hide();
    $("#BookingTambah").show();
}
function hide_tambah() {
    $("#BookingTambah").hide();
    $("#pageBooking").show();
}
function loadBooking(){
    $("#dataBooking").DataTable().destroy();
    $("#dataBooking").DataTable({
        processing: true,
        serverSide: true,
        aLengthMenu: [
            [5, 50, 75, -1],
            [5, 50, 75, "All"]
        ],
        iDisplayLength: 5,
        bPaginate: true,
        filter: true,
        ajax: {
            url: location.origin + "",
            cache: "false",
            data: {
                kode_pilihan: $("#plhPencarian option:selected").val(),
                pilihan: $("#masukan").val()
            },
            type: "post",
            dataType: 'json',
            dataSrc: function (json) {
                var return_array = new Array();
                if (json['status'] == 200) {
                    $.each(json['data'], function (ite, obj) {
                        return_array.push(
                            {
                                'NO': '<label>' + (ite + 1) + '</label>',
                                'NIK': '<label>' + obj.nik + '</label>',
                                'NIP': '<label>' + obj.nip + '</label>',
                                'NAMA': '<label>' + obj.nama + '</label>',
                                'ALAMAT': '<label>' + obj.alamat + '</label>',
                                'ACTION': '<div class="btn btn-group">'
                                    + '<button class="btn btn-info btn-small" onclick="cetak()">'
                                    + '<i class="fa fa-print"></i>'
                                    + '</button>'
                                    + '</div>'
                            });
                    });
                    console.log(return_array);
                } else {

                }
                return return_array;
            },
        },
        columns: [
            { data: 'NO' },
            { data: 'NIK' },
            { data: 'NIP' },
            { data: 'NAMA' },
            { data: 'ALAMAT' },
            { data: 'ACTION' }]
    });
}