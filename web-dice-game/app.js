var scores, roundScore, activePlayer, dice,x,player1,player2,gamePlaying;




init();

document.querySelector('.btn-roll').addEventListener('click',function(){
	
	if(gamePlaying){
		
		var dice = Math.floor(Math.random() *6) +1;

		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-'+dice+'.png';

		if(dice != 1){
			roundScore +=dice;
			document.querySelector('#current-'+activePlayer).textContent = roundScore;
		}else{
			nextPlayer();
		}
	}


});

document.querySelector('.btn-hold').addEventListener('click',function(){
	

	if(gamePlaying){


		scores[activePlayer] += roundScore;

		document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];


		if(scores[activePlayer] >=50){

			//activePlayer == 0 ? x = player1 : x = player2;

			if(activePlayer == 0){
				alert('Player '+ player1 + ' Won!  Happy New Year !!!');
			}else{
				alert('Player '+ player2 + ' Won!  Happy New Year !!!');
			}

			document.querySelector('#name-' + activePlayer).textContent = 'Winner :) ';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('Winner :');
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

			//alert(x+'You won');

			gamePlaying = false;

		}else{
		nextPlayer();
		}
	}



	//nextPlayer();
});


function nextPlayer(){
	activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	document.querySelector('.dice').style.display = 'none';

	alert('Wish you very happy new Year!!!');
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
	scores =[0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;


//dice = Math.floor(Math.random() * 6) +1;

//document.querySelector('#current-' + activePlayer).textContent = dice;

//var x = document.querySelector('#score-0').textContent;
//console.log(x);

	player1 = prompt('Enter player 1 name : ');
	player2 = prompt('Enter player 2 name : ');


	document.getElementById('name-0').textContent = player1;
	document.getElementById('name-1').textContent = player2;

	document.querySelector('.dice').style.display='none';
	
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.remove('Winner');
	document.querySelector('.player-1-panel').classList.remove('Winner');

	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');

	document.querySelector('.player-0-panel').classList.add('active');

}




