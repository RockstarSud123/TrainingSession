var states = new Array();

states['India'] = new Array('Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','WestBengal','Andaman and Nicobar Islands','Chandigarh','Dadra and Nagar Haveli','Daman and Diu','Lakshadweep','Puducherry'); 

var newOptions=states['India'];
var newValues=states['India'];

function setStates() {

    var selectField = document.getElementById("state");
    selectField.options.length = 1; 

    for (var i=0; i<newOptions.length; i++) 
    {
        selectField.options[selectField.length] = new Option(newOptions[i], i+1);
    }
}

function copy(event){
    
    console.log(event.value);

    var x = document.getElementById('state').value;
    
    if(x==""){
      document.getElementById('dropdown').innerHTML = "Please select the State";
      document.getElementById('dropdown').style.color = 'red';
      return false;
    }
    else{
      document.getElementById('dropdown').innerHTML = states['India'][document.getElementById('state').value-1];
      document.getElementById('dropdown').style.color = '';
    }
}
