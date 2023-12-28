'use strict'

let box = document.getElementById('box');
let viewWidth = window.innerWidth;
let viewHeight = window.innerHeight;

window.addEventListener('resize',(e) => {
    viewWidth = window.innerWidth;
    viewHeight = window.innerHeight;
});


box.addEventListener('mouseover',(e)=>{
    let boxAttr = box.getBoundingClientRect()
    let pos = getNewPosition(boxAttr.width,box.height);
    box.style.top = pos.y+'px';
    box.style.left = pos.x+'px';
});

function getNewPosition(boxWidth, boxHeight) {
    
    // The boxWidth and boxHeight are subtracted so that they would not move out from the right and bottom direction
    let newX = Math.floor((Math.random() * viewWidth) + 1 - boxWidth);
    let newY = Math.floor((Math.random() * viewHeight) + 1 - boxHeight);

    // These will satisfy that box does not move go out in the top and left direction
    if(newX < 0) {
        newX = 0;
    }
    if(newY < 0) {
        newY = 0;
    }
    
    return {x: newX, y: newY};
};
