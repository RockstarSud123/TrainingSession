$(document).ready(function() {

    // we have added varibale which will be used for DOM/jQuery events.
    var table = $('.books-store').DataTable({

        // Parsing JSON data to HTML table using AJAX request.
        ajax: 'table_data.json',
        
        // Hides the particular column defined.
        columnDefs: [
            
            // Hiding Office.
            {
                "targets": [2],
                "visible": false,
                "searchable": false
            }
        ],

        // Alternative Pagination: Adds 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers to your page.
        "pagingType": "full_numbers"
    });

    // DOM/jQueryEvent : Gives an alert when clicked on particular row.
    $('.books-store tbody').on('click', 'tr', function() {

        var data = table.row(this).data();  // retrieves info. about selected row.
        alert("You are on " + data[0] + "'s row.");
    });
});
