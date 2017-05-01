window.onload = main;

function main()
{
    var streamers = ['ESL_SC2', 'OgamingSC2', 'cretetion',
		     'freecodecamp', 'storbeck', 'habathcx',
		     'RobotCaleb', 'noobs2ninjas', 'i_amwildcat',
		     'ohmwrecker'];

    for (var i = 0; i < streamers.length; i++) {
	var user = requestStatus('users', streamers[i]);
	var stream = requestStatus('streams', streamers[i]);

	displayStatus(user, stream, streamers[i]);
    }
}

function requestStatus(type, streamer)
{
    var url = 'https://wind-bow.gomix.me/twitch-api/';
    var request = new XMLHttpRequest();
    var response;
    
    request.open('GET', url + type + '/' + streamer, false);
    request.onload = function() {
	response = JSON.parse(request.responseText);
    }
    request.send();
    
    return response;
}

function displayStatus(user, stream, name)
{
    var element = document.createElement('div');
    element.className = 'element';

    var status = document.createElement('p');
    status.className = 'text-left status';
    
    var logo = document.createElement('img');
    logo.className = 'img-circle center-block logo';
    
    var streamer = document.createElement('p');
    streamer.innerHTML = name;
    streamer.className = 'text-center streamer';
    
    var a = document.createElement('a');
    a.target = '_blank';

    var profile = document.createElement('div');
    profile.className = 'col-md-4 col-sm-4';

    var info = document.createElement('div');
    info.className = 'col-md-8 col-sm-8 info';

    var row = document.createElement('div');
    row.className = 'row';

    if (user.status == 404)
    {
	logo.src = 'https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png';
	
	profile.appendChild(logo);
	profile.appendChild(streamer);
	element.className += ' notFound';
	
	status.innerHTML = 'This user\'s account may have been deleted or does not exist';
	info.appendChild(status);
	
    } else
    {
	a.href = 'https://twitch.tv/' + user.name;
	a.appendChild(streamer);
	logo.src = user.logo;
	profile.appendChild(logo);
	profile.appendChild(a);

	if (stream.stream == null)
	{
	    element.className += ' offline';
	    status.innerHTML = 'offline';
	    info.appendChild(status);
	} else
	{
	    element.className += ' online';
	    status.innerHTML = stream.stream.game + ' - '
		+ stream.stream.channel.status;
	    info.appendChild(status);
	}
    }
    
    row.appendChild(profile);
    row.appendChild(info);
    element.appendChild(row);
    
    document.getElementById('display').appendChild(element);
}
