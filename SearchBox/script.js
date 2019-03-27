var states = new Array();

states['India'] = new Array('Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','WestBengal','Andaman and Nicobar Islands','Chandigarh','Dadra and Nagar Haveli','Daman and Diu','Lakshadweep','Puducherry'); 

var list = states['India'];  

function filterFunction() {
    
    var arr = new Array();
    
    var ulist = document.getElementById("stateList");   
    var input = document.getElementById("myInput").value;
    var filter = input.toUpperCase();
    
    for (var i = 0; i < list.length; i++) {  

        var txtValue = list[i];
   
        if (txtValue.toUpperCase().indexOf(filter) > -1) {       

            arr.push(txtValue);
             
            arr.sort();

            document.getElementById("stateList").innerHTML = "";
 
            console.log("Inside if");
        }
        else if(arr=="")
        {
            console.log("Inside else");
            document.getElementById("stateList").innerHTML = "No results found.";
            document.getElementById("stateList").style.color="red";
            document.getElementById("stateList").style.fontSize="2rem";
        }
    }

    for(var i=0; i<arr.length; i++){
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode(arr[i]));
        ulist.appendChild(li);
    }
}



