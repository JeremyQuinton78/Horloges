alert("MARCEHE") ;
var d = new Date();

var Hours = d.getHours();
var Minutes = d.getMinutes();
var Seconds = d.getSeconds();

var degH = Hours*360/12;
alert(degH);

document.getElementById("hourPointer").style.backgroundColor = "#00FF00" ;
element.style.transform = 'rotate('+degH+'deg)' ;
