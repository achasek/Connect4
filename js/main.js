/*----- constants -----*/
const PLAYER_LOOKUP = {
    '1': {
        name: 'player1',
        color: 'red',
    },
    '-1': {
        name: 'computer',
        color: 'yellow',
    },
};

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
    // console.log(evt.target.id)
    if(winner) {
        return
    }
    if(evt.target.id !== 'board') {
        let rowIdx = evt.target.id[0]
        let columnIdx = evt.target.id[2]
        console.log(rowIdx, columnIdx)
        rowIdx = columns[columnIdx];
        if (rowIdx < 0) {
            return;
        }
        
        if(!board[rowIdx][columnIdx]) {
            board[rowIdx][columnIdx] = turn
            checkWin();
            changeTurn();
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
    if(!winner) {
        if (board.forEach((row, idx) => {
             true
            }) {
            messageDisplayEl.innerHTML = "It's a tie!";
            }
        }
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
    //google sliding window in cs
};



init();