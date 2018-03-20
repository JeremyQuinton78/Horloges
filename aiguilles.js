function refreshData(){
	
		var d = new Date();

		var Hours = d.getHours();
		var Minutes = d.getMinutes();
		var Seconds = d.getSeconds();
		var MilliS = d.getMilliseconds();

		var degH = (Hours+Minutes/60+Seconds/3600)*360/12;
		var degM = (Minutes+Seconds/60+MilliS/60000)*360/60;
		var degS = (Seconds+MilliS/1000)*360/60;


		document.getElementById("hourPointer").style.transform = "rotate("+degH+"deg)" ;
		document.getElementById("minutePointer").style.transform = "rotate("+degM+"deg)" ;
		document.getElementById("secondPointer").style.transform = "rotate("+degS+"deg)" ;

		var elemAM = document.getElementById("AM") ;
		var elemPM = document.getElementById("PM") ;
		
		if(Hours >= 12){
			elemAM.style.display = 'none' ;
			elemPM.style.display = 'block';
		}
		else{
			elemAM.style.display = 'block';
			elemPM.style.display = 'none' ;
		}	
		if(Minutes == 0 && Seconds == 0){
			var player = document.querySelector('#coucou');
			player.play() ;
		}

		setTimeout(refreshData, 1) ;
}
refreshData();

    /* click sur l'icone burger menu, ca active la classe change */
    function myFunction(x) {
		x.classList.toggle("change");
	
		/* variable monElement = css du burgerMenu */
		var monElement = document.getElementById("burgerMenu");
		/* condition si la liste du burgerMenu est affichée on cache, sinon on affiche */
		if (monElement.style.display == "block")
			monElement.style.display="none";
		else
		   monElement.style.display="block";
	}
