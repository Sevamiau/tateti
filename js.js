const buttons = document.querySelectorAll('button');
let pChoice = [];



function playerChoice(){
    for (let i = 0; i < buttons.length; i ++) {
    buttons[i].addEventListener('click', () => {
        console.log(buttons[i].textContent);
        const selectedChoice = buttons[i].textContent;
        pChoice.push(selectedChoice);
        });
    }
}
playerChoice();
console.log(pChoice);

function defineWinner() {
    if (pChoice.length == 2) {
        console.log('winner')
    } else {
        // console.log('whatever');
    }
}

defineWinner()