function refreshData(){
	
		var d = new Date();

		var Hours = d.getHours();
		var Minutes = d.getMinutes();
		var Seconds = d.getSeconds();

		var degH = ((Hours+Minutes/60)*360/12) ;
		var degM = Minutes*360/60;
		var degS = Seconds*360/60;

		document.getElementById("hourPointer").style.transform = "rotate("+degH+"deg)" ;
		document.getElementById("minutePointer").style.transform = "rotate("+degM+"deg)" ;
		document.getElementById("secondPointer").style.transform = "rotate("+degS+"deg)" ;

		setTimeout(refreshData, 1000) ;

}

refreshData();
