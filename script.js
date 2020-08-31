var scores = [0,0];
var roundScore = 0;
var activePlayer = 0;
var playing = true;


	document.getElementById("roll-dice-button").addEventListener("click", function(){
		if(playing === true){
			var dice = Math.floor(Math.random() * 6) + 1;
			document.querySelector('.dice').src = 'dice' + dice + '.png';

			//2, 3, 4, 5, 6
			//Condition fails if dice = 1

			if(dice !== 1){
				roundScore += dice;
				document.querySelector('.total-' + activePlayer).innerHTML = roundScore;
				console.log(roundScore);
			}
			else if(activePlayer === 1){
				activePlayer = 0;
				roundScore = 0;
				document.getElementById('total-0').textContent = 0;
				document.getElementById("p0").style.backgroundColor = "#ffce54";
				document.getElementById("p1").style.backgroundColor = "white";
			}
			else {
				activePlayer = 1;
				roundScore = 0;
				document.getElementById('total-1').textContent = 0;
				document.getElementById("p1").style.backgroundColor = "#ffce54";
				document.getElementById("p0").style.backgroundColor = "white";
			}
		}

	});

	document.getElementById("hold-dice").addEventListener("click", function(){
		//result-0
		if(playing === true){
			scores[activePlayer] += roundScore;
			document.getElementById('result-' + activePlayer).innerHTML = scores[activePlayer];

			if(scores[activePlayer] > 20){
				document.getElementById("player-" + activePlayer).innerHTML = "Winner!!";
				playing = false;
			}
			else{
				nextPlayer();
			}
		}
	});

document.getElementById("new-game").addEventListener("click", function(){
	console.log('Pressed');
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	playing = true;
	document.getElementById('player-0').textContent = 'Player 1';
	document.getElementById('player-1').textContent = 'Player 2';
	document.getElementById('result-0').textContent = '0';
	document.getElementById('result-1').textContent = '0';
	document.getElementById('result-0').textContent = '0';
	document.getElementById('result-1').textContent = '0';
	document.getElementById('total-0').textContent = '0';
	document.getElementById('total-1').textContent = '0';
	document.getElementById("p1").style.backgroundColor = "white";
	document.getElementById("p0").style.backgroundColor = "#ffce54";
});

function nextPlayer(){
	if(activePlayer === 1){
		activePlayer = 0;
		roundScore = 0;
		document.getElementById("p0").style.backgroundColor = "#ffce54";
		document.getElementById("p1").style.backgroundColor = "white";
		document.getElementById('total-0').textContent = '0';
	}
	else{
		activePlayer = 1;
		roundScore = 0;
		document.getElementById("p0").style.backgroundColor = "white";
		document.getElementById("p1").style.backgroundColor = "#ffce54";
		document.getElementById('total-1').textContent = '0';
	}
}