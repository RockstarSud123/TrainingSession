$(document).ready(function() {

    // we have added varibale which will be used for DOM/jQuery events.
    var table = $('.books-store').DataTable( {

        // Parsing JSON data to HTML table using AJAX request.
        ajax: 'table_data.json',

        //Deferred rendering for speed
        deferRender: true,
        
        // Hides the particular column defined.
        columnDefs: [
            
            // Hiding Office.
            {
                "targets": [2],
                "visible": false,
                "searchable": false
            }
        ],

        // Alternative Pagination
        pagingType: "full_numbers",

        // Using API in callbacks : Displays only selected row.
        initComplete: function() {
            var api = this.api();
            api.$('td').click(function() {
                api.search(this.innerHTML).draw();
            });
        }
    });

    // DOM/jQueryEvent : 
    $('.books-store tbody').on('click', 'tr', function() {

        // Row selection and deletion (single row)
        if($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else{
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });
    
    //  Button for single row deletion on selection.
    $('.button').click(function() {
        table.row('.selected').remove().draw(false);
    });
});
