const bodyElement = document.querySelector(".books-store > tbody"); 
console.log(bodyElement);

function loadData(){

    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "table_data.json");
    
    // Creating Arrow function to parse JSON File.
    // JSON.parse() : To conver the JSON format into JS object.
    // responseText : Returns server response as JS string. In this case, we will get the actual JSON that we've maintained. 
    // Wrapping JSON.parse() inside try catch block coz it could potentially fail and could throw an exception. 
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
    console.log(json);

    // Populate Table
    // Below loop meaning : forEach row in json
    json.forEach((row) => {
        console.log(row);

        const tr = document.createElement("tr");
        
        // Below loop meaning : forEach cell in a row
        // Reason behind writing the below loop is, since we have json data in an array format, we are converting it into numerous cells.
        row.forEach((cell) => {
            console.log(cell);

            //  Populating table row.
            const td = document.createElement("td");
            // To insert the text of actual cell.
            td.textContent = cell;

            tr.appendChild(td);
        });

        bodyElement.append(tr);
    }); 
}

// Making the function loadData() run when the page loads.
// So adding event listener to the document object.
// DOMContentLoaded : Once the entire DOM has been loaded, we're then safe to actually maipulate the DOM.
// So, once the content is loaded we are going to load the data. 
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
