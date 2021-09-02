// display name
var name;
name = window.prompt ("Please enter your name");
document.getElementById("DisplayName").innerHTML = "<h1> Hello " + name + ", Welcome to JavaScript World! </h1>";

// greeting
function myFunction() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    document.getElementById("greeting").innerHTML = alert(greeting);
}

// get current date and time
var currentdate = new Date(); 
var datetime = "Date: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " Time: "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
document.getElementById("DateAndTime").innerHTML = datetime;

// show day
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
}
document.getElementById("today").innerHTML = "Today is " + day;