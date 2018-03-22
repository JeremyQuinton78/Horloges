/*
var json = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "/coordVille.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();

var objCoordVille = '
{"coordVille":[
	'{"id":"-11", "lat":"-0.17", "lng":"-160"},' +
	'{"id":"-10", "lat":"-17.553", "lng":"-149.555"},' + 
	'{"id":"-9.5", "lat":"-8.907", "lng":"-140.104"},' +
	'{"id":"-9", "lat":"61.129", "lng":"-149.074"},' + 
	'{"id":"-8", "lat":"49.430", "lng":"-122.981"},' +
	'{"id":"-7", "lat":"39.857", "lng":"-104.993"},' +
	'{"id":"-6", "lat":"19.660", "lng":"-98.800"},' +
	'{"id":"-5", "lat":"40.729", "lng":"-73.985"},' +
	'{"id":"-4", "lat":"-33.456", "lng":"-70.670"},' +
	'{"id":"-3.5", "lat":"43.596", "lng":"-56.416"},' +
	'{"id":"-3", "lat":"-22.865", "lng":"-43.163"},' +
	'{"id":"-1", "lat":"14.96", "lng":"-23.485"},' +
	'{"id":"0", "lat":"51.5", "lng":"-0.1"},' +
	'{"id":"1", "lat":"48.856", "lng":"2.353"},' +
	'{"id":"2", "lat":"50.494", "lng":"30.532"},' +
	'{"id":"3", "lat":"55.745", "lng":"37.624"},' +
	'{"id":"3.5", "lat":"35.695", "lng":"51.388"},' +
	'{"id":"4", "lat":"41.715", "lng":"44.806"},' +
	'{"id":"4.5", "lat":"37.564", "lng":"69.214"},' +
	'{"id":"5", "lat":"24.934", "lng":"67.118"},' +
	'{"id":"5.5", "lat":"28.7", "lng":"79.59"},' +
	'{"id":"5.75", "lat":"27.54", "lng":"84.9"},' +
	'{"id":"6", "lat":"51.166", "lng":"71.463"},' +
	'{"id":"6.5", "lat":"16.877", "lng":"96.183"},' +
	'{"id":"7", "lat":"21.028", "lng":"105.837"},' +
	'{"id":"8", "lat":"39.902", "lng":"116.39"},' +
	'{"id":"8.5", "lat":"39.036", "lng":"125.76"},' +
	'{"id":"9", "lat":"25.683", "lng":"139.74"},' +
	'{"id":"9.5", "lat":"-23.7", "lng":"133.88"},' +
	'{"id":"10", "lat":"-33.908", "lng":"151.2"},' +
	'{"id":"11", "lat":"-17.739", "lng":"168.317"},' +
	'{"id":"12", "lat":"-36.914", "lng":"174.827"},' +
	'{"id":"13", "lat":"-19.79", "lng":"-174.349" }
]}' ;

var obj = JSON.parse(objCoordVille);

console.log(coordVille[0]);
*/

function refreshData(){
	
		var d = new Date();

		var Hours = d.getHours()-1;
		var Minutes = d.getMinutes();
		var Seconds = d.getSeconds();
		var MilliS = d.getMilliseconds();

		var selectVille = document.getElementById("ville") ; 
		var jetLag = parseFloat(selectVille.value) ;

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


function initMap() 
{
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 25, lng: 8},
		zoom: 1.8,
		zoomControl: false,
  		mapTypeControl: false,
  		scaleControl: false,
		streetViewControl: false,
		rotateControl: false,
		fullscreenControl: false
		}
	)
	
var myLatLng = {lat: -18, lng: -150};
		var marker = new google.maps.Marker({
   		position: myLatLng,
    	map: map,
  		});

};

refreshData();

