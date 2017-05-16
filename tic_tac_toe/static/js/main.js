$(document).ready(function() {
    
    var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var human, bot;
        
    $('.pick').click(function() {
	if ($(this).text() == 'O')
	{
	    $(this).addClass('active');
	    $(this).siblings().removeClass('active');
	    human = 'O';
	    bot = 'X';
	    reset();
	}
	else
	{
	    $(this).addClass('active');
	    $(this).siblings().removeClass('active');	    
	    human = 'X';
	    bot = 'O';
	    reset();
	}
	
    });	
    var moves = 0;
    $('.block').click(function() {
	
	if ($(this).text() == '')
	{
	    $(this).html(human);
	    board[parseInt($(this).attr('id'))] = human;
	    moves++;
	    
	    var botTurn = setTimeout(function() {
		
		var move = botMove(board, bot);
		$('#' + move).html(bot);
		board[move] = bot;
		moves++;
		
		if (winning(board, bot))
		{
		    verdict('You lost :(');
		}
		
	    }, 500);
	}
	
	if (winning(board, human))
	{
	    verdict('You Won! :)');
	}
	else if (tie(board))
	{
	    verdict('It\'s a tie!');
	}
	
    });
    
    $("#reset").click(reset);

    /******************
	   HELPERS
    ******************/

    function winning(board, player) {
	if ((board[0] == player && board[1] == player && board[2] == player) ||
	    (board[3] == player && board[4] == player && board[5] == player) ||
	    (board[6] == player && board[7] == player && board[8] == player) ||
	    (board[0] == player && board[4] == player && board[8] == player) ||
	    (board[2] == player && board[4] == player && board[6] == player) ||
	    (board[0] == player && board[3] == player && board[6] == player) ||
	    (board[1] == player && board[4] == player && board[7] == player) ||
	    (board[2] == player && board[5] == player && board[8] == player))
	    return true;

	return false;
    }
    
    function emptyIndices(board) {
	return board.filter(val => val != 'O' && val != 'X');
    }

    /*function minimax(board, player) {
      
      }*/

    function tie(board) {
	var availSpots = emptyIndices(board);
	if (availSpots.length > 0)
	    return false;
	else
	    return true;
    }

    function reset() {
	board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

	for (var i = 0; i < 9; i++)
	{
	    $("#" + i).html('');
	}

    }

    function botMove(board, bot) {
	var emptyBlocks = emptyIndices(board);
	var generated = Math.floor(Math.random() * (emptyBlocks[emptyBlocks.length-1] - emptyBlocks[0])) + emptyBlocks[0];

	var move;
	for (var i = emptyBlocks.length; i >= 0; i--)
	{
	    if (generated > emptyBlocks[i])
	    {
		move = emptyBlocks[i];
		break;
	    }
	    else
		move = generated;
	}

	    return move;
    }

    function verdict(message) {

	$('#flash_message').html('<em>' + message + '</em>');
	$('#flash_message').fadeIn('slow');
	var fadeOut = setTimeout(function() {
	    $('#flash_message').fadeOut('slow');
	    reset();
	}, 2000);

    }

});    
