$(document).ready(function() {
    
    drawBoard();

    $("#reset").click(reset);
    
});

function reset()
{
    $("#board").html('');

    drawBoard();
}


function drawBoard()
{
    for (var i = 0; i < 9; i++)
    {
	$("#board").append('<div id="' + i + '" class="block"></div>');
    }

    play();
}

function play()
{
    // whose turn is it?
    var turn = "human";

    /*if (Math.random() > 0.5)
	turn = "player";
    else
	turn = "bot";*/
    
    var human = "O";
    var bot = "X";
    
    $(".block").click(function() {
	if ($(this).text() == "")
	{
	    if (turn === "human")
	    {
		$(this).append(human);

		if (winning(human))
		{
		    setTimeout(function() {

			$("#board").html("<p>You Won!</p>");
			
		    }, 500);
		    
		    setTimeout(reset, 2000);

		}
		//turn = "bot";		
	    }


	}
    });

    /*if (turn === "bot")
    {
	turn = "human";
	}*/


}

function winning(player) {
    if (($("#0").text() == player && $("#1").text() == player && $("#2").text() == player) ||
	($("#3").text() == player && $("#4").text() == player && $("#5").text() == player) ||
	($("#6").text() == player && $("#7").text() == player && $("#8").text() == player) ||
	($("#0").text() == player && $("#4").text() == player && $("#8").text() == player) ||
	($("#2").text() == player && $("#4").text() == player && $("#6").text() == player) ||
	($("#0").text() == player && $("#3").text() == player && $("#6").text() == player) ||
	($("#1").text() == player && $("#4").text() == player && $("#7").text() == player) ||
	($("#2").text() == player && $("#5").text() == player && $("#8").text() == player))
	return true;

    return false;
}
    
    
