//      DATE

var date = new Date();
var year = date.getFullYear();
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
month = month[date.getMonth()];
var day = date.getDate();

if(day==1 || day==21 || day==31){

    day += "st".sup();
    document.getElementById("date").innerHTML = day + " " + month + ", " + year;
}
else if(day==2 || day==22){

    day += "nd".sup();
    document.getElementById("date").innerHTML = day + " " + month + ", " + year;
}
else if(day==3 || day==23){

    day += "rd".sup();
    document.getElementById("date").innerHTML = day + " " + month + ", " + year;
}
else{

    day += "th".sup();
    document.getElementById("date").innerHTML = day + " " + month + ", " + year;
}

//      TIME    

function timeFunction(){

    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();

    function checkTime(i){
        if(i<10){
            i = "0" + i;
        }
        return i;
    }

    if(hour > 12){
     
        hour = hour-12;
        document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second + " " + "PM";                     
    }
    else{
    
        document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second + " " + "AM";
    }
    var variable = setTimeout(timeFunction, 1000);
}