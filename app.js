const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
};

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
};



const resetButton = document.querySelector('#reset');

const winScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winScore = 5;
let isGO = false;

p1Button.addEventListener('click', ()=>{
    if(!isGO){
        p1Score += 1;
        if(p1Score === winScore) {
            isGO = true;     
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score;  
    }
});

p2Button.addEventListener('click', ()=>{
    if(!isGO){
        p2Score += 1;
        if(p2Score === winScore) {
            isGO = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
});

winScoreSelect.addEventListener('change', function(){
    winScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset);

function reset() {
    isGO = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success','has-text-danger');
    p2Display.classList.remove('has-text-danger','has-text-success');
    p1Button.disabled = false;
    p2Button.disabled = false;
    };