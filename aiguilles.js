var objCoordVille = '{"coordVille":['+
	'{"id":"-11", "lat":"-0.17", "lng":"-160", "format":"mja"},' +
	'{"id":"-10", "lat":"-17.553", "lng":"-149.555", "format":"jma"},' + 
	'{"id":"-9.5", "lat":"-8.907", "lng":"-140.104", "format":"jma"},' +
	'{"id":"-9", "lat":"61.129", "lng":"-149.074", "format":"mja"},' + 
	'{"id":"-8", "lat":"49.430", "lng":"-122.981", "format":"amj"},' +
	'{"id":"-7", "lat":"39.857", "lng":"-104.993", "format":"mja"},' +
	'{"id":"-6", "lat":"19.660", "lng":"-98.800", "format":"jma"},' +
	'{"id":"-5", "lat":"40.729", "lng":"-73.985", "format":"mja"},' +
	'{"id":"-4", "lat":"-33.456", "lng":"-70.670", "format":"jma"},' +
	'{"id":"-3.5", "lat":"43.596", "lng":"-56.416", "format":"amj"},' +
	'{"id":"-3", "lat":"-22.865", "lng":"-43.163", "format":"jma"},' +
	'{"id":"-1", "lat":"14.96", "lng":"-23.485", "format":"jma"},' +
	'{"id":"0", "lat":"51.5", "lng":"-0.1", "format":"jma"},' +
	'{"id":"1", "lat":"48.856", "lng":"2.353", "format":"jma"},' +
	'{"id":"2", "lat":"50.494", "lng":"30.532", "format":"jma"},' +
	'{"id":"3", "lat":"55.745", "lng":"37.624", "format":"jma"},' +
	'{"id":"3.5", "lat":"35.695", "lng":"51.388", "format":"jma"},' +
	'{"id":"4", "lat":"41.715", "lng":"44.806", "format":"jma"},' +
	'{"id":"4.5", "lat":"37.564", "lng":"69.214", "format":"jma"},' +
	'{"id":"5", "lat":"24.934", "lng":"67.118", "format":"jma"},' +
	'{"id":"5.5", "lat":"28.7", "lng":"79.59", "format":"jma"},' +
	'{"id":"5.75", "lat":"27.54", "lng":"84.9", "format":"jma"},' +
	'{"id":"6", "lat":"51.166", "lng":"71.463", "format":"jma"},' +
	'{"id":"6.5", "lat":"16.877", "lng":"96.183", "format":"jma"},' +
	'{"id":"7", "lat":"21.028", "lng":"105.837", "format":"jma"},' +
	'{"id":"8", "lat":"39.902", "lng":"116.39", "format":"amj"},' +
	'{"id":"8.5", "lat":"39.036", "lng":"125.76", "format":"amj"},' +
	'{"id":"9", "lat":"25.683", "lng":"139.74", "format":"amj"},' +
	'{"id":"9.5", "lat":"-23.7", "lng":"133.88", "format":"jma"},' +
	'{"id":"10", "lat":"-33.908", "lng":"151.2", "format":"jma"},' +
	'{"id":"11", "lat":"-17.739", "lng":"168.317", "format":"jma"},' +
	'{"id":"12", "lat":"-36.914", "lng":"174.827", "format":"jma"},' +
	'{"id":"13", "lat":"-19.79", "lng":"-174.349" }]}' ;

	var obj = JSON.parse(objCoordVille);

	var latMaps ;
	var lngMaps ;
	var jetLag ;

	

function refreshData(){
	
		var d = new Date();

		var Year = d.getFullYear();
		var Month = d.getMonth()+1;
		var Day = d.getDate();
		var Hours = d.getHours();
		var Minutes = d.getMinutes();
		var Seconds = d.getSeconds();
		var MilliS = d.getMilliseconds();

		var selectVille = document.getElementById("ville") ; 
		jetLag = parseFloat(selectVille.value) ;

		for (var i = 0; i <= 32; i++) {
			if(obj.coordVille[i].id == jetLag){
				latMaps = obj.coordVille[i].lat;
				lngMaps = obj.coordVille[i].lng;
				if(obj.coordVille[i].format == "jma"){
					document.getElementById('date').innerHTML = Day+" / "+Month+" / "+Year ;}
				if(obj.coordVille[i].format == "mja"){
					document.getElementById('date').innerHTML = Month+" / "+Day+" / "+Year ;}
				if(obj.coordVille[i].format == "amj"){
					document.getElementById('date').innerHTML = Year+" / "+Month+" / "+Day ;}
			}
		}

		if((parseFloat(jetLag) == parseInt(jetLag)) && !isNaN(jetLag)){ 
			Hours = Hours + jetLag;
  		}
  		else {
			var decimal = jetLag - parseInt(jetLag);
			Hours = Hours + jetLag - decimal;
			Minutes = Minutes + decimal*60;
		}

		var degH = (Hours+Minutes/60)*360/12;
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

function initMap() 
{
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 25, lng: 8},
		zoom: 1.6,
		zoomControl: false,
			mapTypeControl: false,
			scaleControl: false,
		streetViewControl: false,
		rotateControl: false,
		fullscreenControl: false
	}
	)

	var myLatLng = {lat: parseFloat(latMaps), lng: parseFloat(lngMaps)};
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
	});
};

