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
    var clockState = "idle";

    var seconds = 60;
    
    $("#countdown").click(function() {

	var minutes = sessDur;
	
	if (clockState === "idle" || clockState === "paused")
	{
	    if (minutes == $("#sessVal").text())
	    {
		minutes--;
		sessDur = minutes;
	    }
	    
	    clockState = "active";

	    clock = setInterval(function() {

		if (seconds > 0)
		{
		    seconds--;
		    if (seconds > 9)
			$("#timer").html(minutes + ":" + seconds);
		    else
			$("#timer").html(minutes + ":0" + seconds);
		}
		else if (seconds === 0)
		{
		    if (minutes === 0)
		    {
			alert("Breaktime!");
		    }
		    else
		    {
			minutes--;
			sessDur = minutes;
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

    $("#reset").click(function() {

	if (clockState === "active")
	    clearInterval(clock);
	
	sessDur = 25;
	breakDur = 5;
	
	$("#timer").html(sessDur + ":00");
	$("#sessVal").html(sessDur);
	$("#breakVal").html(breakDur);

	clock = undefined;
	clockState = "idle";
	
    });

});
