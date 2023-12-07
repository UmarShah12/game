let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-game-btn');
let msg_container = document.querySelector('.msg-container');
let winnerPerson = document.getElementById('winner');

let turnO = true;

let winningPattren = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    boxesEnabled();
    msg_container.classList.add("hide");
}



boxes.forEach((box) => {
    box.addEventListener('click', () => {
        // console.log('Button was clcked');
        if (turnO) {
            box.innerText = 'O';
            box.style.color = 'green';
            turnO = false;
        } else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        checkWinner()
    })
});

const boxesEnabled = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const boxesDisabled = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    winnerPerson.innerText = `Congragulation, Winner is ${winner}`;
    msg_container.classList.remove('hide');
    boxesDisabled()
}

const checkWinner = () => {
    for (let pattren of winningPattren) {
        let posVal1 = boxes[pattren[0]].innerText;
        let posVal2 = boxes[pattren[1]].innerText;
        let posVal3 = boxes[pattren[2]].innerText;
        if (posVal1 != '' && posVal2 != '' && posVal3 != '') {
            if (posVal1 === posVal2 && posVal2 === posVal3) {
                // console.log('Winning point', posVal1);
                showWinner(posVal1)
            }
        }
    }
};

newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);