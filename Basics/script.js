// var dice, score, activePlayer;
var score, roundScore, activePlayer;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    document.querySelector('#dice').style.display = 'block';
    dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector('#dice').src='../Book-Hub/dice-' + dice + '.svg';

    if(dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else {
        nextPlayer();
        // document.querySelector('.dice-image').style.display = 'none';
    }
})

document.querySelector('.btn-hold').addEventListener('click', function() {
    score[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

    if(score[activePlayer] >= 100){
        document.querySelector('#name-' + activePlayer).textContent = 'W I N N E R !';
        document.querySelector('.dice-image').style.display = 'none';
    }else {
        nextPlayer();
    }           
})

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.activeImage-0').classList.toggle('deactive');
    document.querySelector('.activeImage-1').classList.toggle('deactive');
};


function init() {
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('#dice').style.display = 'none';

    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.activeImage-0').classList.remove('deactive'); 
};

