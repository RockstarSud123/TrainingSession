var states = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','WestBengal','Andaman and Nicobar Islands','Chandigarh','Dadra and Nagar Haveli','Daman and Diu','Lakshadweep','Puducherry']; 

var newOptions=states;

function setStates() {

    var selectField = document.getElementById("state");
    selectField.options.length = 1; 

    for (var i=0; i<newOptions.length; i++) 
    {
        selectField.options[selectField.length] = new Option(newOptions[i], i+1);
    }
}

function copy(event){

    var state = document.getElementById('state').value;
    var dropdown = document.getElementById('dropdown');
    if(state==""){
      dropdown.innerHTML = "Please select the State";
      dropdown.style.color = 'red';
      return false;
    }
    else{
      dropdown.innerHTML = states[state-1];
      dropdown.style.color = '';
    }
}
