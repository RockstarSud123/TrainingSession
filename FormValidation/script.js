function validate(){

    var validName = validateName(), validEmail = validateEmail(), validGender = validateGender(), validDOB = validateDOB(), validNumber = validateMobileNo(), validAddress = validateAddress(), validCity = validateCity(), validCountry = validateCountry(), validExpertise = validateExpertise(), validGroup =  validateGroup();

     if(validName && validEmail && validGender && validDOB && validNumber &&  validAddress && validCity && validCountry && validExpertise && validGroup){
        return true;
     }
     else{
         return false;
     }
}

function validateName() {
    var fullName = document.getElementById('fullName').value, 
        domName = document.getElementById('errorName');
    
    if(fullName==""){
        domName.innerHTML="* Please Enter your Full Name.";
        return false;
    }
    else if(!isNaN(fullName)){
        domName.innerHTML="Please enter only character.";
        return false;
    }
    else if((fullName.length<4)||(fullName.length>12)){
        domName.innerHTML="Characters must be in between 4 to 12.";
        return false;
    }
    else{
        domName.innerHTML="";
         return true;
    }    
}

function validateEmail(){
    var symbols = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 
        Email = document.getElementById('Email').value, 
        domEmail = document.getElementById('errorEmail');

    if(Email==""){
        domEmail.innerHTML="Enter Email Address.";
        return false;
    }
    else if(!Email.match(symbols)){
        domEmail.innerHTML="Please enter valid Email Address.";
        return false;
    }
    else{
        domEmail.innerHTML="";
         return true;
    }
}

function validateGender(){

    var domMale = document.getElementById('male').checked, domFemale = document.getElementById('female').checked, 
        domGender = document.getElementById('errorRadioButton');
    
    if((domMale==false) && (domFemale==false)){
        domGender.innerHTML="Please select your gender.";
        return false;
    }
    else{
        domGender.innerHTML="";
         return true; 
    }
}

function validateDOB(){
    symbols=/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    var dateOfBirth = document.getElementById('dateOfBirth').value, 
        domDOB = document.getElementById('errorDOB'); 

    if(dateOfBirth==""){
        domDOB.innerHTML="Please enter your Date of Birth.";
        return false;
    }
    else if(!dateOfBirth.match(symbols)){
        domDOB.innerHTML="Enter Date of Birth in proper format.";
        return false;
    }
    else{
        domDOB.innerHTML="";
          return true;
    }
}

function validateMobileNo(){
    var mobileNumber = document.getElementById('mobileNumber').value,
        domNumber = document.getElementById('errorMobileNumber');

    if(mobileNumber==""){
        domNumber.innerHTML="Please enter your contact number.";
        return false;
    }
    else if(isNaN(mobileNumber)){
        domNumber.innerHTML="Enter only numeric value.";
        return false;
    }
    else if(mobileNumber.length<10||mobileNumber.length>10){
        domNumber.innerHTML="Contact number must be of 10 digits.";
        return false;
    }
    else if((mobileNumber.charAt(0)!=9)&&(mobileNumber.charAt(0)!=8)&&(mobileNumber.charAt(0)!=7)){
        domNumber.innerHTML="Mobile number should always start with 9, 8 or 7.";
        return false;
    }
    else{
        domNumber.innerHTML="";
         return true;
    }
}

function validateAddress(){
    var address=document.getElementById('address').value,
        domAddress = document.getElementById('errorAdress');

    if(address==""){
        domAddress.innerHTML="Enter your address.";
        return false;
    }    
    else if((address.length<20)||(address.length>100)){
        domAddress.innerHTML="Your textarea must be in between 20 to 100. \n Length of your textarea is : " + address.length;
        return false;
    }
    else{
        domAddress.innerHTML="";
         return true;
    }
}

function validateCity(){
  

    var city = document.getElementById('city').selectedIndex, 
        domCity = document.getElementById('errorCity');

    if(city == 0){
        domCity.innerHTML="Please select your city.";
        return false;
    }
    else{
        domCity.innerHTML="";
         return true;
    }
}

function validateCountry(){
    var country=document.getElementById('country').value, 
        domCountry = document.getElementById('errorCountry');

    if(country==""){
        domCountry.innerHTML="Please enter your country.";
        return false;
    }
    else if(!isNaN(country)){
        domCountry.innerHTML="Please enter only character.";
        return false;
    }
    else if((country.length<4)||(country.length>12)){
        domCountry.innerHTML="Characters must be in between 4 to 12.";
        return false;
    }
    else{
        domCountry.innerHTML="";
         return true;
    }  
}

function validateExpertise(){
    var checkBox = document.getElementsByName('inlineCheckbox'), domExpertise = document.getElementById('errorExpertise'), 
        html = checkBox[0].checked, css = checkBox[1].checked, js = checkBox[2].checked, jQuery = checkBox[3].checked;

    console.log(html); console.log(css); console.log(js); console.log(jQuery);

    if(!checkBox[0].checked && !checkBox[1].checked && !checkBox[2].checked && !checkBox[3].checked){
        domExpertise.innerHTML="Please choose at least one expertise.";
        return false;
    }
    else{
        domExpertise.innerHTML="";
         return true;
    }
}

function validateGroup(){
    var group=document.getElementById('group').selectedIndex, 
        domGroup = document.getElementById('errorGroup');

    if(group == -1){
        domGroup.innerHTML="Please select any one group.";
        return false;
    }
    else{
        domGroup.innerHTML="";
         return true;
    }
}
