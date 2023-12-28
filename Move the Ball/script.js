    'use-strict'

let ball = document.getElementById('ball')
let moveBy = 10;

window.addEventListener('load',()=>{
    ball.style.position = 'absolute';
    ball.style.left = 0;
    ball.style.top = 0;
})

window.addEventListener('keydown',(e) => {
   switch (e.key){
    case 'a':
        ball.style.left=parseInt(ball.style.left)-moveBy+'px';
        break;
    case 'd':
        ball.style.left=parseInt(ball.style.left)+moveBy+'px';
        break;
    case 'w':
        ball.style.top=parseInt(ball.style.top)-moveBy+'px';
        break;
    case 's':
        ball.style.top=parseInt(ball.style.top)+moveBy+'px';
        break;
   }
});