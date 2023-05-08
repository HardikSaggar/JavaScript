// 'use strict';
// // document.querySelector('.message').textContent='🎉 Correct secretNumber';

// // document.querySelector('.secretNumber').textContent = 13;
// // document.querySelector('.score').textContent = 10;
// // document.querySelector('.guess').value = 23;

// let secretNumber = Math.trunc(Math.random()*20)+1;
// let score = 20;
// let highScore = 0;
// const displayMessage = function(message){
//     document.querySelector('.message').textContent = message;   
// }


// document.querySelector('.check').addEventListener('click', function() {
//     const guess = Number(document.querySelector('.guess').value);
//     // console.log(guess);
//     //when there is no number
//     if (!guess){
//         // document.querySelector('.message').textContent = 'No Number🛑'
//         displayMessage('No Number🛑');
//         //when Player wins
//     }else if (guess === secretNumber){
//         // document.querySelector('.message').textContent='🎉 Correct Number' ;
//         displayMessage('🎉 Correct Number');
//         document.querySelector('body').style.
//         backgroundColor= '#60b347';
//         document.querySelector('.number').textContent = secretNumber;
//         document.querySelector('.number').style.width = '30rem';
//         if(score>highScore){
//             highScore = score;
//             document.querySelector('.highScore').textContent = highScore;
//         }

//         //If guesses too high
//     }else if (guess !== secretNumber) {
//         if (score > 1){
//             // document.querySelector('.message').textContent = guess>secretNumber ?  '📈 Too High' : '📉 Too Low';
//             displayMessage(guess>secretNumber ?  '📈 Too High' : '📉 Too Low');
//             score--;
//             document.querySelector('.score').textContent = score;
            
//         }else{
//             // document.querySelector('.message').textContent = ' 🥴 You lost';
//             displayMessage(' 🥴 You lost');
//             document.querySelector('.score').textContent = 0;
//             document.querySelector('body').style.backgroundColor= '#900D09';
//     };
    
//     // else if (guess>secretNumber){
//     //     if (score > 1){
//     //         document.querySelector('.message').textContent = '📈 Too High'
//     //         score--;
//     //         document.querySelector('.score').textContent = score;
//     //     }else{
//     //         document.querySelector('.message').textContent = ' 🥴 You lost';
//     //         document.querySelector('.score').textContent = 0;
//     //         document.querySelector('body').style.backgroundColor= '#900D09';
//     //     }
//     //     //If guesses too low
//     // }else if (guess<secretNumber){
//     //     if (score > 1){
//     //         document.querySelector('.message').textContent = '📉 Too Low';
//     //         score--;
//     //         document.querySelector('.score').textContent = score;
//     //     }else{
//     //         document.querySelector('.message').textContent = ' 🥴 You lost'
//     //         document.querySelector('.score').textContent = 0;
//     //         document.querySelector('.score').textContent = 0;
//     //         document.querySelector('body').style.backgroundColor= '#900D09';
//     //     }
       

//     }
// });

// document.querySelector('.again').addEventListener('click', function (){
//     score = 20;
//     secretNumber = Math.trunc(Math.random()*20)+1;
//     // document.querySelector('.message').textContent = 'Start guessing...';
//     displayMessage('Start guessing....')
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.guess').value = '';
//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '15rem';

// });


const secretNumber = Math.trunc(Math.random()*20)+1;
let number = document.querySelector('.number').textContent;
let score = 20;
const check = document.querySelector('.check');
const message = document.querySelector('.message'); 
let highScore = 0;
// highScore = score
// console.log(highScore);

const guessing = function(){
    const guess = Number(document.querySelector('.guess').value);
    if (!guess){
        if (score === 0){
            document.querySelector('.check').remove();
            document.querySelector('body').style.backgroundColor = 'red';
            message.textContent = '‼ Sorry! You lost';
        }
        message.textContent = '❌ No Number';
        score--;
        document.querySelector('.score').textContent = score;
        
    }else if(guess === secretNumber){
        message.textContent = '✅ Correct! You win';
        document.querySelector('.highscore').textContent = score;
        let number = document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.check').remove();
        // highScore = score;
        // console.log(highScore);
    }
    else if(score>1){
        if (guess > secretNumber){
            message.textContent = '📈 High! Try Lower';
            score--;
        }else if (guess < secretNumber){
            message.textContent= '📉 Low! Try Higher';
            score--;
        }
        document.querySelector('.score').textContent = score;
    }else{
        message.textContent = '‼ Sorry! You lost';
        score--;
        document.querySelector('.score').textContent = score;
       


    }
};
check.addEventListener('click',guessing);
// message.textContent = 'no';