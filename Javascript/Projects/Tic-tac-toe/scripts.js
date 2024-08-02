const boxes = document.querySelectorAll('.box');
const gameInfo = document.querySelector('.game-info');
const newGameBtn = document.querySelector('.btn');
const playerSteps = document.querySelector('.player-steps');

let currentPlayer;
let gameGrid;

const winningPositions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

// function to initialize the game
function initGame(){
    currentPlayer = 'X';
    gameGrid = ['', '', '', '', '', '', '', '', ''];
    // newGameBtn.classList.remove("active");
    boxes.forEach((box) => {
        box.classList.remove('win');
        box.style.pointerEvents = "auto";
    });
    newGameBtn.style.display = 'none';
    gameInfo.textContent = `Current Player - ${currentPlayer}`;
}

initGame();

function swapPlayer(){
    if(currentPlayer === 'X'){
        currentPlayer = 'O';
    } else {    
        currentPlayer = 'X';
    } 

    // UI Update
    gameInfo.textContent = `Current Player - ${currentPlayer}`;
}

function checkWinner(){
    let winner = "";
    winningPositions.forEach((position)=>{
        if((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") && (gameGrid[position[0]] === gameGrid[position[1]] && gameGrid[position[1]] === gameGrid[position[2]])){
            
            if(gameGrid[position[0]] === 'X'){
                winner = 'X';
            }
            else{
                winner = 'O';
            }
            // disable pointer
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            });

            boxes[position[0]].classList.add('win');
            boxes[position[1]].classList.add('win');
            boxes[position[2]].classList.add('win');
        }
    });
    if(winner !== ""){
        gameInfo.textContent = `Winner Player - ${winner}`;
        newGameBtn.classList.add("active");
        newGameBtn.style.display = 'block';
    }

    // logic for draw
    if(!gameGrid.includes("") && winner === ""){
        gameInfo.textContent = `Game Draw`;
        newGameBtn.classList.add("active");
        newGameBtn.style.display = 'block';
    }
}

function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].textContent = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.cursor = "not-allowed";
        // swapping the player / swap turn
        swapPlayer();

        // check for winning
        checkWinner();
    }
}

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        handleClick(index);
    })
});

newGameBtn.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.textContent = '';
        box.style.cursor = "pointer";
    });
    initGame();
});