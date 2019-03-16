function validate(){
   
    // console.log(document.getElementById('group').selectedIndex);

    console.log("1 " + validateName());
    console.log("2 " + validateEMail());
    console.log("3 " + validateGender());
    console.log("4 " + validateDateOfBirth());
    console.log("5 " + validateMobileNo());
    console.log("6 " + validateAddress());
    console.log("7 " + validateCity());
    console.log("8 " + validateCountry());
    console.log("9 " + validateExpertise());
    console.log("10 " + validateGroup());


     if(validateName() && validateEMail() && validateGender() && validateDateOfBirth() && validateMobileNo() &&  validateAddress() && validateCity() && validateCountry() && validateExpertise() && validateGroup()){
        console.log("Validation successfully done.");
        return true;
     }
     else{
         console.log("Validation required");
         return false;
     }
}


function validateName() {
    var yourName = document.getElementById('yourName').value;
    
    if(yourName==""){
        document.getElementById('urName').innerHTML="* Please Enter your Full Name.";
        return false;
    }
    else if(!isNaN(yourName)){
        document.getElementById('urName').innerHTML="Please enter only character.";
        return false;
    }
    else if((yourName.length<4)||(yourName.length>12)){
        document.getElementById('urName').innerHTML="Characters must be in between 4 to 12.";
        return false;
    }
    else{
        document.getElementById('urName').innerHTML="";
         return true;
    }    
}

function validateEMail(){
    var symbols = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var EMail = document.getElementById('EMail').value;
    if(EMail==""){
        document.getElementById('email').innerHTML="Enter Email Address.";
        return false;
    }
    else if(!EMail.match(symbols)){
        document.getElementById('email').innerHTML="Please enter valid Email Address.";
        return false;
    }
    else{
        document.getElementById('email').innerHTML="";
         return true;
    }
}

function validateGender(){
    if((document.getElementById('male').checked==false) && (document.getElementById('female').checked==false)){
        document.getElementById('radioButton').innerHTML="Please select your gender.";
        return false;
    }
    else{
        document.getElementById('radioButton').innerHTML="";
         return true; 
    }
}

function validateDateOfBirth(){
    symbols=/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    var dateOfBirth = document.getElementById('dateOfBirth').value;
   
    console.log(dateOfBirth);
   
    if(dateOfBirth==""){
        document.getElementById('dob').innerHTML="Please enter your Date of Birth.";
        return false;
    }
    else if(!dateOfBirth.match(symbols)){
        document.getElementById('dob').innerHTML="Enter Date of Birth in proper format.";
        return false;
    }
    else{
        document.getElementById('dob').innerHTML="";
          return true;
    }
}

function validateMobileNo(){
    var mobileNumber = document.getElementById('mobileNumber').value;
    if(mobileNumber==""){
        document.getElementById('mobile').innerHTML="Please enter your contact number.";
        return false;
    }
    else if(isNaN(mobileNumber)){
        document.getElementById('mobile').innerHTML="Enter only numeric value.";
        return false;
    }
    else if(mobileNumber.length<10||mobileNumber.length>10){
        document.getElementById('mobile').innerHTML="Contact number must be of 10 digits.";
        return false;
    }
    else if((mobileNumber.charAt(0)!=9)&&(mobileNumber.charAt(0)!=8)&&(mobileNumber.charAt(0)!=7)){
        document.getElementById('mobile').innerHTML="Mobile number should always start with 9, 8 or 7.";
        return false;
    }
    else{
        document.getElementById('mobile').innerHTML="";
         return true;
    }
}

function validateAddress(){
    var address=document.getElementById('address').value;
    
    console.log(address.length);
    
    if(address==""){
        document.getElementById('adress').innerHTML="Enter your address.";
        return false;
    }    
    else if((address.length<20)||(address.length>100)){
        document.getElementById('adress').innerHTML="Your textarea must be in between 20 to 100. \n Length of your textarea is : " + address.length;
        return false;
    }
    else{
        document.getElementById('adress').innerHTML="";
         return true;
    }
}

function validateCity(){
    console.log(document.getElementById('city').selectedIndex);
    if(document.getElementById('city').selectedIndex == 0){
        document.getElementById('citi').innerHTML="Please select your city.";
        return false;
    }
    else{
        document.getElementById('citi').innerHTML="";
         return true;
    }
}

function validateCountry(){
    var country=document.getElementById('country').value;
    if(country==""){
        document.getElementById('cuntry').innerHTML="Please enter your country.";
        return false;
    }
    else{
        document.getElementById('cuntry').innerHTML="";
         return true;
    }
}

function validateExpertise(){
    var checkBox = document.getElementsByName('inlineCheckbox[]');
    if(!checkBox[0].checked && !checkBox[1].checked && !checkBox[2].checked && !checkBox[3].checked){
        document.getElementById('expertise').innerHTML="Please choose at least one expertise.";
        return false;
    }
    else{
        document.getElementById('expertise').innerHTML="";
         return true;
    }
}

function validateGroup(){
    var group=document.getElementById('group').selectedIndex;
    
    if(group == -1){
        document.getElementById('grup').innerHTML="Please select any one group.";
        return false;
    }
    else{
        document.getElementById('grup').innerHTML="";
         return true;
    }
}

// $('#submit-btn').click(function(){

// })