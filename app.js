const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1Score = 0;
let p2Score = 0;
let winScore = 5;
let isGO = false;

p1Button.addEventListener('click', ()=>{
    if(!isGO){
        p1Score += 1;
        if(p1Score === winScore) {
            isGO = true;     
        }
        p1Display.textContent = p1Score;
    }
});
p2Button.addEventListener('click', ()=>{
    if(!isGO){
        p2Score += 1;
        if(p2Score === winScore) {
            isGO = true;     
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener('click', ()=>{
isGO = false;
p1Score = 0;
p2Score = 0;
p1Display.textContent = 0;
p2Display.textContent = 0;
});