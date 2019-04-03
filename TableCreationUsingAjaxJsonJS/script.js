const bodyElement = document.querySelector(".books-store > tbody"); 

function loadData(){
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "table_data.json");
     
    xhttp.onload = () => {
        try{
            const json = JSON.parse(xhttp.responseText);

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
        const tr = document.createElement("tr");
        
        row.forEach((cell) => {
            const td = document.createElement("td");
      
            td.textContent = cell;
            tr.appendChild(td);
        });

        bodyElement.append(tr);
    }); 
}

document.addEventListener("DOMContentLoaded", () => {
    loadData();
});
