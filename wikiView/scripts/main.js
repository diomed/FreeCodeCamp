window.onload = function()
{
    var search = document.getElementById('search');

    search.addEventListener('click', function() {
	displayResults();
    }, false);
    

    function displayResults()
    {
	var getResults = new XMLHttpRequest();
	var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=10&origin=*&search=';

	
	getResults.open('GET', url + query.value.replace(/ /g, '%20'));
	getResults.onload = function() {
	    
	    var query = document.getElementById('query');
	    var response = JSON.parse(getResults.responseText);
	    var display = document.getElementById('display');

	    display.innerHTML = "";
	    for (var i = 0; i < response[1].length; i++)
	    {
		
		var newDiv = document.createElement('div');
		var h2 = document.createElement('h2');
		var p = document.createElement('p');
		var a = document.createElement('a');
		
		h2.innerHTML = response[1][i];
		newDiv.appendChild(h2);
		p.innerHTML = response[2][i];
		newDiv.appendChild(p);
		a.innerHTML = response[3][i];
		a.href = response[3][i];
		a.target = '_blank';
		newDiv.appendChild(a);
		newDiv.className = 'elements';
		display.appendChild(newDiv);
	    }
	}
	getResults.send();
    }

}
