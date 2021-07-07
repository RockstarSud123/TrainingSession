$(document).ready(function(){
    $.getJSON("table_data.json", function(data){
        var books_data = '';
        $.each(data, function(key, value){
            books_data += '<tr>';
            books_data += '<td>' + value.bookID + '</td>';
            books_data += '<td>' + value.bookName + '</td>';
            books_data += '<td>' + value.category + '</td>';
            books_data += '<td>' + value.price + '</td>';
            books_data += '</tr>';
        });
        $('.books-info').append(books_data);
    });
});
