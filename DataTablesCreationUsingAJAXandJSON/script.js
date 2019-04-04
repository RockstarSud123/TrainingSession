$(document).ready(function() {
    $('.books-store').DataTable({
        ajax: 'table_data.json'
    });
});
