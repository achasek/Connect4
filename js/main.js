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

//why capitalized and why numbers in a string
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



/*----- app's state (variables) -----*/ 
let turn, board, winner;


/*----- cached element references -----*/ 
const messageDisplayEl = document.querySelector('h2');
const resetBtnEl = document.getElementById('reset');
const boardEl = document.getElementById('board');


/*----- event listeners -----*/
resetBtnEl.addEventListener('click', handleResetClick);
boardEl.addEventListener('click', handleBoardClick);


/*----- functions -----*/