/*----- constants -----*/
const PLAYER_LOOKUP = {
    '1': {
        name: 'Player 1',
        color: 'red',
    },
    '-1': {
        name: 'Computer',
        color: 'yellow',
    },
};

const HEIGHT = 4;
const WIDTH = 5;

/*----- app's state (variables) -----*/
let turn, board, winner;



/*----- cached element references -----*/ 
let messageDisplayEl = document.querySelector('h2');
let resetBtnEl = document.getElementById('reset');
let boardEl = document.getElementById('board');



/*----- event listeners -----*/
resetBtnEl.addEventListener('click', handleResetClick);
boardEl.addEventListener('click', handleBoardClick); 




/*----- functions -----*/
function init() {
    turn = 1
    board = [
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
    ]
    columns = [3, 3, 3, 3, 3]
    winner = null
    render();
};

function handleBoardClick(evt) {
    if(winner) {
        console.log(winner)
        return
    }
    if(evt.target.id !== 'board') {
        let rowIdx = evt.target.id[0]
        let columnIdx = evt.target.id[2]
        rowIdx = columns[columnIdx];
        if (rowIdx < 0) {
            return;
        }
        
        if(!board[rowIdx][columnIdx]) {
            board[rowIdx][columnIdx] = turn
            changeTurn();
            checkWin();
            render();
        }

        rowIdx -= 1;
        columns[columnIdx] = rowIdx;
    }
};

function handleResetClick() {
    init();
};

function changeTurn() {
    turn = turn * -1;
};

function render() {
    // if its tie, win, or currently someones turn
    console.log(winner)
    if ((winner === null) && (board.every(row => row.every(square => square)))) {
        messageDisplayEl.innerHTML = `<span class="h2Text">It's a tie</span>`
    } else if(winner === null) {
        messageDisplayEl.innerHTML = `<span class="h2Text">${PLAYER_LOOKUP[turn].name}'s</span> Turn`
    } else {
        messageDisplayEl.innerHTML = `<span class="h2Text">${PLAYER_LOOKUP[winner].name}</span> Wins!`
    }

    board.forEach((row, idx) => {
        row.forEach((square, idy) => {
        if (square) {
            document.getElementById(`${idx}-${idy}`).style.backgroundColor = PLAYER_LOOKUP[square].color 
        } else {
            document.getElementById(`${idx}-${idy}`).style.backgroundColor = 'white';
        }
    })
    });
};

function checkWin() {
    checkRow(); 
    checkColumns();
}
// }
    //row=i square=j
    //checkRow should add all values of the row and see if they = 4
function checkRow() {
    for(let row=0; row < board.length; row++) {
        let rowTotal = 0;
        for(let square=0; square <board[row].length; square++) {
            rowTotal = rowTotal + board[row][square]
            console.log(rowTotal)
            if(rowTotal === 3) {
                winner = 1
            }
            else if(rowTotal === -3) {
                winner = -1
            }
        }
    }
}
function checkColumns() {
    for(let column=0; column < WIDTH; column++) {
        let columnTotal = 0;
        for(let row=0; row < board.length; row++) {
            columnTotal = columnTotal + board[row][column]
            if(columnTotal === 4) {
                winner = 1
            } else if (columnTotal === -4) {
                winner = -1
            }
        } 
    }
}



init();