function validate(){

    // Your Name
    yourName = document.getElementById('yourName').value;
    if(yourName==""){
        document.getElementById('urName').innerHTML="* Please Enter your Full Name.";

        document.getElementById('yourName').value="";
        document.getElementById('yourName').focus();
        return false;
    }
    if(!isNaN(yourName)){
        document.getElementById('urName').innerHTML="Please enter only character.";
        return false;
    }
    if((yourName.length<4)||(yourName.length>12)){
        document.getElementById('urName').innerHTML="Characters must be in between 4 to 12.";
        return false;
    } 

    // EMail
    if(((document.getElementById('EMail').value.indexOf('@')<0))||(document.getElementById('EMail').value.charAt(document.getElementById('EMail').value.length-4)!='.')&&(document.getElementById('EMail').value.charAt(document.getElementById('EMail').value.length-3)!='.')){
        document.getElementById('email').innerHTML="Please enter valid EMail Address.";
        return false;
    }

    // // Gender (Radio Buttons)
    // if(document.getElementById('container')[0].checked==false){

    //     document.getElementById('radioButton').innerHTML="Select at least one.";
    //     return false;
    // }

    // // Date Of Birth
    // dateOfBirth = document.getElementById('dateOfBirth').value;

    // if(dateOfBirth==""){
    //     document.getElementById('dob').innerHTML="Please enter your Date of Birth.";
    //     return false;
    // }

    // Mobile No.
    mno = document.getElementById('mno').value;
    if(mno==""){
        document.getElementById('mn').innerHTML="Please enter your contact number.";
        return false;
    }
    if(isNaN(mno)){
        document.getElementById('mn').innerHTML="Enter only numeric value.";
        return false;
    }
    if(mno.length<10||mno.length>10){
        document.getElementById('mn').innerHTML="Contaact number must be of 10 digits only.";
        return false;
    }
    if((mno.charAt(0)!=9)&&(mno.charAt(0)!=8)&&(mno.charAt(0)!=7)){
        document.getElementById('mn').innerHTML="Mobile number should always start with 9, 8 or 7.";
        return false;
    }

    // Address
    address=document.getElementById('address').value;
    if(address==""){
        document.getElementById('adr').innerHTML="Enter your address.";
        return false;
    }
    if((address.length<20)||(address.length>100)){
        document.getElementById('adr').innerHTML="Your textarea must be in between 20 to 100.";
        return false;
    }

    // City (<select> &  <option> element)
    if(document.getElementById('city').selectedIndex==""){
        document.getElementById('ct').innerHTML("Please select your city.");
        return false;
    }
    

    // Country
    country=document.getElementById('country').value;
    if(country==""){
        document.getElementById('cntry').innerHTML="Please enter your country.";
        return false;
    }

    // Expertise
    if(document.getElementById('inlineCheckbox').checked==false){
        document.getElementById('expertise').innerHTML="Please choose at least one expertise.";
        return false;
    }
    else{
        return true;
    }

    // Group (<select> &  <option> element)
}






































































































// function empty(str){
//     if(str==""){
//         return true;
//     }
//     return false;
// }