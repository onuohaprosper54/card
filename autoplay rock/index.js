let score = JSON.parse(localStorage.getItem
('score')) || {
    win: 0,
    losses: 0,
    ties: 0
};

 updateScoreElement(); 


/*
if (!score) {
  score = {
    win: 0,
    losses: 0,
    ties: 0
};
}*/

let isAutoPlaying = false;
let Intervalid;

 function autoPlay() {
  if (!isAutoPlaying) {
  Intervalid = setInterval(() => {
    const playerMove = pickComputerMove();
   playGame(playerMove);
  }, 1000);
  isAutoPlaying = true;
} else {
  clearInterval(Intervalid);
isAutoPlaying = false;  
}
}
document.querySelector('.js-rock-button').addEventListener('.click', 
  () => {
    playGame('rock');  
});
 document.querySelector('.js-paper-button').addEventListener('.click', 
  () => {
    playGame('Paper');  
});
document.querySelector('.js-scissors-button').addEventListener('.click', 
  () => {
    playGame('scissors');  
});

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
      playGame('rock');
    }else if (event.key === 'p') {
       playGame('Paper');
      }else if (event.key === 's') {
       playGame('scissors');
      }
});

    function playGame(playerMove) {
      const computerMove = pickComputerMove();
        
        let result = ' ';
         if (playerMove === 'scissors') {

        if (computerMove === 'rock') {
        result = 'You lose.';
        }else if (computerMove === 'Paper') {
        result = 'You win.';
        }else if (computerMove === 'scissors') {
        result = 'Tie.';
        }

      } else if (playerMove === 'Paper') {
        if (computerMove === 'rock') {
     result = 'You win.';
     }else if (computerMove === 'Paper') {
     result = 'Tie.';
    }else if (computerMove === 'scissors') {
     result = 'You lose.';
    }
    
       } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
     result = 'Tie.';
     }else if (computerMove === 'Paper') {
      result = 'You lose.';
    }else if (computerMove === 'scissors') {
     result = 'You win.';
    }
         }
      
         if (result === 'You win.') {
          score.wins += 1;
         } else if (result === 'You lose.') {
          score.losses += 1;
         } else if (result === 'Tie.') {
          score.ties += 1;
         }

         localStorage.setItem('score', JSON.stringify(score));

               updateScoreElement();   

                document.querySelector('.js-result')
          .innerHTML = result;

          document.querySelector('.js-moves')
          .innerHTML = ` you <img src="icons/${playerMove}-emoji.png" class="move-icon">
  <img src="icons/${computerMove}-emoji.png"
  class="move-icon">computer`;
            }

            function updateScoreElement() {
              document.querySelector('.js-score')
          .innerHTML = `wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`;
            }

    function pickComputerMove() {
      const randomNumber = Math.random();

      let computerMove = ' ';
    
      if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock'; 
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) { 
      computerMove = 'Paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) { 
      computerMove = 'scissors';  
        }
        return computerMove;
        }