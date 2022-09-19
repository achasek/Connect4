/*----- constants -----*/
const winningCombos = [
    //columns
    [0, 5, 10, 15],
    [1, 6, 11,16],
    [2, 7, 12, 17],
    [3, 8, 13, 18],
    [4, 9, 14, 19],
    //rows left-aligned
    [0, 1, 2, 3],
    [5, 6, 7, 8],
    [10, 11, 12, 13],
    [15, 16, 17, 18],
    //rows right-aligned
    [1, 2, 3, 4],
    [6, 7, 8, 9],
    [11, 12, 13, 14],
    [16, 17, 18, 19],
    //diagonals
    [0, 6, 12, 18],
    [1, 7, 13, 19],
    [3, 7, 11, 15],
    [4, 8, 12, 16],
];

const PLAYER_LOOKUP = {
    '1': {
        name: 'Player1',
        symbol: 'O',

    };
    '-1': {
        name: 'Computer',
        symbol: 'X',
    };
};

const boardSize = 20;

/*----- app's state (variables) -----*/ 
let board, winner;
// let turn

/*----- cached element references -----*/ 
const messageDisplayEl = document.querySelector('h2');
const resetBtnEl = document.getElementById('reset');
const boardEl = document.getElementById('board');

/*----- event listeners -----*/
resetBtnEl.addEventListener('click', handleResetClick);
boardEl.addEventListener('click', handleBoardClick);

/*----- functions -----*/
function init() {
    turn = 1;
    board = [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    ];
    winner = null;
    render();
};

function handleResetClick() {
    init();
};

function handleBoardClick(evt) {
    if(winner) return;

    if (evt.target.id !== 'board') {
        const idx = evt.target.id[2];
        if (!board[idx]) {
            board[idx] = turn;
            checkWin();
            changeTurn()
            render();
            // computerChooses();
        }
    };
};

function render() {
   if (!winner && board.every(square => square) {
    return (messageDisplayEl.innerHTML = "It's a Tie!")
   }) else if (!winner) {
    return (messageDisplayEl.innerHTML = `${PLAYER_LOOKUP[turn].name}'s turn`)
   } else {
    return (messageDisplayEl.innerHTML = `${PLAYER_LOOKUP[winner].name}` Wins!)
   };

    board.forEach(square, idx) 
};

function changeTurn( {
    turn *= -1;
})

function checkWin() {

};

// function computerChooses() {
//     const randomIdx = Math.floor(Math.random() * board.length);
//     computer.choice = board[randomIdx];
// };