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
    console.log(winner)
    if ((winner === null) && (board.every(row => row.every(square => square)))) {
        console.log('its a tie')
        messageDisplayEl.innerHTML = `<span class="h2Text">It's a tie</span>`
    } else if(winner === null) {
        messageDisplayEl.innerHTML = `<span class="h2Text">${PLAYER_LOOKUP[turn].name}'s</span> Turn`
    } else {
        console.log(`PLAYER_LOOKUP[winner].name`, PLAYER_LOOKUP[winner].name)
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
    //checks rows
    for(let i=0; i < board.length; i++) {
        let winningTotal = 0;
        for(let j=0; j <board[i].length; j++) {
            if(board[i][j] !== null && board[i][j-1] !== null) {
                if(board[i][j] === board[i][j-1]) {
                    winningTotal += 1
                        if(winningTotal === 3) {
                            winner = turn
                            break
                    }
                }
            }
        }
    }
// checks columns
    // for(let i=0; i < board.length; i++) {
    //     let winningTotal = 0;
    //     for(let j=0; j < board[i].length; j++) {
    //         console.log(winningTotal)
    //         if(board[i][j] !== null) {
    //             winningTotal += 1
    //                 // for(let i=0; i < board.length[i+1]; i++) {
    //                 //     for(let j=0; j < board[i+1].length; j++) {
    //                         if(board[i][j] !== null && board[i+1][j] !== null && board[i][j] === board[i+1[j]) {
    //                             winningTotal += 1
    //                             if(winningTotal === 3) {
    //                                 winner = turn
    //                                 break
    //                             }
    //                         }
    //                     }
    //                 }
                    
    //         }
        }




init();