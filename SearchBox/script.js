var states = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','WestBengal','Andaman and Nicobar Islands','Chandigarh','Dadra and Nagar Haveli','Daman and Diu','Lakshadweep','Puducherry'],
    list = states;  

function filterFunction() {
    
    var arr = [], 
        ul = document.getElementById("stateList"), 
        input = document.getElementById("myInput").value,
        filter = input.toUpperCase();

    for (var i = 0; i < list.length; i++) {  

        var txtValue = list[i];

        if (txtValue.toUpperCase().indexOf(filter) > -1) {       

            arr.push(txtValue);
            arr.sort();
            ul.innerHTML = "";
        }
    }

    if(arr.length === 0) {
        ul.innerHTML = "No results found.";
        ul.style.color="red";
        ul.style.fontSize="2rem";
    }

    for(var j=0; j<arr.length; j++){
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode(arr[j]));
        ul.appendChild(li);
    }
}