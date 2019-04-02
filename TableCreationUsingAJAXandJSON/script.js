$(document).ready(function(){
    $.getJSON("table_data.json", function(data){
        var books_info = '';
        $.each(data, function(key, value){
            books_info += '<tr>';
            books_info += '<td>' + value.bookID + '</td>';
            books_info += '<td>' + value.bookName + '</td>';
            books_info += '<td>' + value.category + '</td>';
            books_info += '<td>' + value.price + '</td>';
            books_info += '</tr>';
        });
        $('.books-info').append(books_info);
    });
});