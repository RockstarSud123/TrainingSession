var tbody = document.querySelector(".books-store > tbody"); 

function loadData(){
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "table_data.json", true);
     
    xhttp.onload = () => {
        try{
            var json = JSON.parse(xhttp.responseText);

            populateTable(json);
        }
        catch(e){
            console.warn("Could not load data.");
        }
    };

    xhttp.send();
}

function populateTable(json){
    
    json.forEach((row) => {
        var tr = document.createElement("tr");
        
        row.forEach((cell) => {
            var td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });

        tbody.append(tr);
    }); 
}

document.addEventListener("DOMContentLoaded", () => {
    loadData();
});
