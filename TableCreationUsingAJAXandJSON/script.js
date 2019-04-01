function createTableFromJSON() {

    // JSON DATA :-
    var info = [
        {
            "Name": "John",
            "Age": 23,
            "DOB": "12th August, 1995",
            "Organization": "Google"
        },
        {
            "Name": "Andrew",
            "Age": 23,
            "DOB": "16th July, 1995",
            "Organization": "Facebook"
        },
        {
            "Name": "Lisa",
            "Age": 24,
            "DOB": "23rd March, 1994",
            "Organization": "Microsoft"
        }
    ]

    // EXTRACT VALUE FOR HTML HEADER. ('Name', 'Age', 'DOB' and 'Organization')
    var col = [];

    for (var i = 0; i < info.length; i++) {
        for (var key in info[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    var tr = table.insertRow(-1);                   

    for (var i = 0; i < col.length; i++) {

        var th = document.createElement("th");      
        th.innerHTML = col[i];        
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < info.length; i++) {

        tr = table.insertRow(-1);

        // Adding info to the particular fields.
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = info[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.appendChild(table);
}