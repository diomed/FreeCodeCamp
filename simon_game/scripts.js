$(document).ready(function() {

    // levels player will go through
    const levels = [[1],[1,4],[1,4,3],[1,4,3,4],[1,4,3,4,4],
		    [1,4,3,4,4,2],[1,4,3,4,4,2,3],[1,4,3,4,4,2,3,4],
		    [1,4,3,4,4,2,3,4,1],[1,4,3,4,4,2,3,4,1,2],
		    [1,4,3,4,4,2,3,4,1,2,3],[1,4,3,4,4,2,3,4,1,2,3,4],
		    [1,4,3,4,4,2,3,4,1,2,3,4,1],
		    [1,4,3,4,4,2,3,4,1,2,3,4,1,2],
		    [1,4,3,4,4,2,3,4,1,2,3,4,1,2,3],
		    [1,4,3,4,4,2,3,4,1,2,3,4,1,2,3,4],
		    [1,4,3,4,4,2,3,4,1,2,3,4,1,2,3,4,2],
		    [1,4,3,4,4,2,3,4,1,2,3,4,1,2,3,4,2,3],
		    [1,4,3,4,4,2,3,4,1,2,3,4,1,2,3,4,2,3,4],
		    [1,4,3,4,4,2,3,4,1,2,3,4,1,2,3,4,2,3,4,1]];

    var level = 0,
	playerClicks = [],
	gameOn = false,
	strictMode = false,
	speed = 800;

    // toggle the game between strict and not strict
    $('#strct_tgl').click(function() {
	
	if (strictMode) {
	    strictMode = false;
	    $(this).html('Strict: off');
	} else {
	    strictMode = true;
	    $(this).html('Strict: on');
	}

	reset();
    });

    $('#gm_tgl').click(function() {

	if (!gameOn)
	{
	    gameOn = true;
	    $(this).attr('class', 'reset');
	    $(this).html('Reset');
	    showPattern();
	}
	else
	{
	    gameOn = false;
	    $(this).attr('class', 'start');
	    $(this).html('Start');
	    reset();
	}
	
    });

/***************************************************************

---------------------------HELPERS-----------------------------

***************************************************************/
    function showPattern() {
	if (gameOn) {
	    setTimeout(displayMessage(level+1), 3000);
	    if (level > 7)
		speed = 600;
	    else if (level > 13)
		speed = 300;
	    let i = 0;
	    let pattern = setInterval(function() {
		
		glowButton(levels[level][i]);
		playSound(levels[level][i]);
		
		i++;
		
		if (i >= levels[level].length)
		    clearInterval(pattern);
		
	    }, speed);

	    playerClicks = [];
	    playerMove();
	}
    }

    function glowButton(btn) {
	$('#btn'+btn).addClass('glow');
	setTimeout(function() {
	    $('#btn'+btn).removeClass('glow');
	}, 300);
    }

    function playerMove() {
	if (gameOn) {
	    $('.sndbtn').unbind().click(function() {
		switch (this.id) {
		case 'btn1':
		    playSound(1);
		    playerClicks.push(1);
		    break;
		case 'btn2':
		    playSound(2);
		    playerClicks.push(2);
		    break;
		case 'btn3':
		    playSound(3);
		    playerClicks.push(3);
		    break;
		case 'btn4':
		    playSound(4);
		    playerClicks.push(4);
		    break;
		}

		if (playerClicks.length <= levels[level].length) {
		    checkClicks();
		}
	    });
	}
    }

    function checkClicks() {
	if (playerClicks[playerClicks.length-1]
	    !== levels[level][playerClicks.length-1]) {
	    if (strictMode) {
		displayMessage('Wrong! Start Over');
		setTimeout(startOver, 1000);
	    } else {
		displayMessage('Wrong! Try Again');
		setTimeout(tryAgain, 1000);
	    }
	} else if (playerClicks.length == levels[level].length) {
	    displayMessage('Level Up!');
	    setTimeout(levelUp, 1000);
	} else {
	    playerMove();
	}
    }

    function startOver() {
	playerClicks = [];
	level = 0;
	showPattern();
    }

    function tryAgain() {
	showPattern();
    }
    
    function levelUp() {
	if (level == 19) {
	    displayMessage('You Won!');
	    return;
	} else {
	    level++;
	    showPattern();
	}
    }
    
    function displayMessage(message) {
	$('#msg').html(message)
    }
    
    function playSound(btn) {
	var sound = new Audio('media/simonSound' + btn + '.mp3');
	sound.play();
	sound.currentTime=0;
    }

    function reset() {
	gameOn = false;
	level = 0;
	playerClicks = [];
	$('#msg').html('');
	$('#gm_tgl').attr('class', 'start').html('Start');
    }

});
