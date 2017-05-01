navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    

    var weatherRequest = new XMLHttpRequest();
    var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?';

    weatherRequest.open('GET', weatherAPI + 'lat=' + lat + '&lon=' + lon + '&APPID=0feb9cfecdf5300b1cc74126d5314767');

    weatherRequest.onload = function() {
	
	var weather = JSON.parse(weatherRequest.responseText);
	
	document.getElementById('location').innerHTML = weather.name + ", " + weather.sys.country;
	document.getElementById('weather').innerHTML = weather.weather[0].description;
	
	var tempC = weather['main'].temp - 273.15;
	var tempF = tempC * 9 / 5 + 32;
	var tempTag = document.getElementById('temperature');
	
	tempTag.innerHTML = tempC + '&degC';

	document.getElementById('btnC').addEventListener('click', function() {
	    tempTag.innerHTML = tempC + '&degC';
	}, false);

	document.getElementById('btnF').addEventListener('click', function() {
	    tempTag.innerHTML = tempF + '&degF';
	}, false);
				 
	document.getElementById('icon').src = 'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png';

    };

weatherRequest.send();

});
