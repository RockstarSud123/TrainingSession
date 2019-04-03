const bodyElement = document.querySelector(".books-store > tbody"); 

function loadData(){
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "table_data.json");
     
    xhttp.onload = () => {
        try{
            const json = JSON.parse(xhttp.responseText);
            // We are then going to pass the JSON to a diff fn. which will then actually populate the table using DOM.
            
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






























































// [
//     {
//         "bookID": "1", 
//         "bookName": "Computer Architecture",
//         "category": "Computers",
//         "price": "125.60"
//     },
//     {
//         "bookID": "2",
//         "bookName": "Asp.Net 4 Blue Book",
//         "category": "Programming",
//         "price": "56.00"
//     },
//     {
//         "bookID": "3",
//         "bookName": "Popular Science",
//         "category": "Science",
//         "price": "210.40"
//     }
// ]
