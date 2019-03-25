//      DATE

var date = new Date();
var year = date.getFullYear();
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
month = month[date.getMonth()];
var day = date.getDate();
var dday = day+10;

if(day==1 || day==21 || day==31){

    console.log("inside if 1");

    day += "st".sup();

    console.log(day);
    console.log(month);
    console.log(year);
    
    document.getElementById("date").innerHTML = day + " " + month + ", " + year;
}
else if(day==2 || day==22){

    console.log("inside else if 1");

    day += "nd".sup();

    console.log(day);
    console.log(month);
    console.log(year);
    
    document.getElementById("date").innerHTML = day + " " + month + ", " + year;
}
else if(day==3 || day==23){

    console.log("inside else if 2");

    day += "rd".sup();

    console.log(day);
    console.log(month);
    console.log(year);
    
    document.getElementById("date").innerHTML = day + " " + month + ", " + year;
}
else{

    console.log("inside else 1");

    day += "th".sup();

    console.log(day);
    console.log(month);
    console.log(year);
    
    document.getElementById("date").innerHTML = day + " " + month + ", " + year;
}

//      TIME    

function timeFunction(){

    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();

    minute = checkTime(minute);
    second = checkTime(second);

    function checkTime(i){
        if(i<10){
            i = "0" + i;
        }
        return i;
    }

    if(hour > 12){

        console.log("inside if 3");

        hour = hour-12;
        hour = checkTime(hour);
        document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second + " " + "PM";                     
    }
    else{

        console.log("inside else 3");

        document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second + " " + "AM";
    }
    var variable = setTimeout(timeFunction, 1000);
    // console.log(variable);
}