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

let WIN = {
       makeCounter: function() {
            for (let i = 1; i < 50; i++){
                let scoreRange = `<option value='${i}'>${i}</option>`;
                WIN.select.innerHTML += scoreRange;
            }            
        },
        score: 13,
        select: document.querySelector('#playto')
    }
    
WIN.makeCounter();


let winScore = Number;
let isGO = false;



function updateScore(player, opponent){
    if(!isGO){
        player.score += 1;
        if(player.score  ===  WIN.score) {
            isGO = true;     
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.disabled = true;
            opponent.disabled = true;
        }
        player.display.textContent = player.score;  
    }
}

p1.button.addEventListener('click', ()=>{
    updateScore(p1, p2);
});

p2.button.addEventListener('click', ()=>{
    updateScore(p2, p1);

});

WIN.select.addEventListener('change', function(){
    WIN.score = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset);

function reset() {
    isGO = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    };