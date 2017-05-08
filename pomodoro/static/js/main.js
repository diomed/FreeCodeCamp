$(document).ready(function() {

    // session duration
    var sessDur = 25;
    // break duration
    var breakDur = 5;
    
    $("#session .changeVal").click(function() {
	if (clockState === "active")
	{
	    clockState === "idle";
	    clearInterval(clock);
	}
	
	if ($(this).text() === '-')
	    sessDur--;
	else if ($(this).text() === '+')
	    sessDur++;

	$("#sessVal").html(sessDur);
	$("#timer").html(sessDur + ":00");
    });
    
    $("#break .changeVal").click(function() {
	if ($(this).text() === '-')
	    breakDur--;
	else if ($(this).text() === '+')
	    breakDur++;
	$("#breakVal").html(breakDur);
    });

    var clock;
    
    // clockState used in manipulating the clock
    var clockState = "idle";

    // used to determine if using session timer or break timer
    var currClock = "session";

    var seconds = 60;
    var minutes;    
    
    $("#countdown").click(function() {

	if (currClock === "session")
	    minutes = sessDur;
	else if (currClock === "break")
	    minutes = breakDur;


	if (clockState === "idle" || clockState === "paused")
	{

	    clock = setInterval(function() {

		if (clockState === "idle")
		    minutes--;
		
		clockState = "active";
		

		if (seconds > 0)
		{
		    --seconds;
		    if (seconds > 9)
			$("#timer").html(minutes + ":" + seconds);
		    else
			$("#timer").html(minutes + ":0" + seconds);
		}
		else if (seconds === 0)
		{
		    if (minutes === 0)
		    {
			if (currClock === "session")
			{
			    minutes = breakDur;
			    currClock = "break";
			}
			else if (currClock === "break")
			{
			    minutes = sessDur;
			    currClock = "session";
			}
			
			seconds = 60;

			clockState = "idle";
		    }
		    else
		    {
			--minutes;
			
			if (currClock === "session")
			    sessDur = minutes;

			else if (currClock === "break")
			    breakDur = minutes;

			seconds = 60;
		    }
		}
		
	    }, 1000);
	}
	else if (clockState === "active")
	{
	    clockState = "paused";
	    clearInterval(clock);
	}

    });

    $("#reset").click(reset);

    function reset() {
	if (clockState === "active")
	    clearInterval(clock);
	
	sessDur = 25;
	breakDur = 5;
	seconds = 60;
	
	$("#timer").html(sessDur + ":00");
	$("#sessVal").html(sessDur);
	$("#breakVal").html(breakDur);

	currClock = "session";
	clock = undefined;
	clockState = "idle";
    }

});
