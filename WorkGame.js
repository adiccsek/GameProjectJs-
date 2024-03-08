
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let cellSize = Math.min(canvas.width, canvas.height) / 8;
const MainSiteSetValue2 = localStorage.getItem('buttonValue');



let currentPlayers = 'X';
localStorage.setItem('currentPlayers', currentPlayers);


let grid3 = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let grid4 = [ 
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
];

let grid5 = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
];




function drawX(x, y) {


    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + cellSize, y + cellSize);
    ctx.moveTo(x + cellSize, y);
    ctx.lineTo(x, y + cellSize);
    ctx.stroke();
}

function drawO(x, y) {

    ctx.beginPath();
    ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize / 2, 0, Math.PI * 2);
    ctx.stroke();
}

function checkWinner(grid) {
    const size = grid.length;

    
    for (let i = 0; i < size; i++) {
        if (new Set(grid[i]).size === 1 && grid[i][0] !== '') {
            return grid[i][0];
        }
    }

  
    for (let i = 0; i < size; i++) {
        let column = grid.map(row => row[i]);
        if (new Set(column).size === 1 && column[0] !== '') {
            return column[0];
        }
    }

    
    let mainDiagonal = grid.map((row, i) => row[i]);
    if (new Set(mainDiagonal).size === 1 && mainDiagonal[0] !== '') {
        return mainDiagonal[0];
    }

    
    let secondaryDiagonal = grid.map((row, i) => row[size - i - 1]);
    if (new Set(secondaryDiagonal).size === 1 && secondaryDiagonal[0] !== '') {
        return secondaryDiagonal[0];
    }

    
    return null;
}
function IsMatrixFull (grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == "") {
                return false;
            }
        }
    }
    return true;
}



function handleClick(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left - canvas.width / 2 + MainSiteSetValue2 / 2 * cellSize;
    const y = e.clientY - rect.top - canvas.height / 2 + MainSiteSetValue2 / 2 * cellSize;
 
    const I = Math.floor(x / cellSize);
    const J = Math.floor(y / cellSize);
    
    let User1Points = 0;
    let User2Points = 0;

    if (MainSiteSetValue2 == '3' && I < 3 && J < 3 && grid3[I][J] == "") {
        grid3[I][J] = currentPlayers;
        if (currentPlayers == 'X') {
            drawX(I * cellSize, J * cellSize);
            currentPlayers = 'O';
        } else {
            drawO(I * cellSize, J * cellSize);
            currentPlayers = 'X';
        }
        localStorage.setItem('currentPlayers', currentPlayers);
        if (checkWinner(grid3) === 'X') {
            alert(User1 + ' wins!');
            User1Points++;
           
        } else if (checkWinner(grid3) === 'O') {
            alert(User2 + ' wins!');
            User2Points++;
            
        } else if (IsMatrixFull(grid3)) {
            alert('It is a tie!');
            
        }
        localStorage.setItem('User1Points', User1Points);
        localStorage.setItem('User2Points', User2Points);
    }



    if (MainSiteSetValue2== '4' && I < 4 && J < 4 && grid4[I][J] == "") {
        grid4[I][J] = currentPlayers;
        if (currentPlayers == 'X') {
            drawX(I * cellSize, J * cellSize);
            currentPlayers = 'O';
        } else {
            drawO(I * cellSize, J * cellSize);
            currentPlayers = 'X';
        }
        localStorage.setItem('currentPlayers', currentPlayers);
        if (checkWinner(grid4) === 'X') {
            alert(User1 + ' wins!');
            User1Points++;
            localStorage.setItem('User1Points', User1Points);
        } else if (checkWinner(grid4) === 'O') {
            alert(User2 + ' wins!');
            User2Points++;
            localStorage.setItem('User2Points', User2Points);
        } else if (IsMatrixFull(grid4)) {
            alert('It is a tie!');
            
        }
    }

    if (MainSiteSetValue2 == '5' && I < 5 && J < 5 && grid5[I][J] == "") {
        grid5[I][J] = currentPlayers;
        if (currentPlayers == 'X') {
            drawX(I * cellSize, J * cellSize);
            currentPlayers = 'O';
        } else {
            drawO(I * cellSize, J * cellSize);
            currentPlayers = 'X';
        }
        localStorage.setItem('currentPlayers', currentPlayers);
        if (checkWinner(grid5) === 'X') {
            alert(User1 + ' wins!');
            User1Points++;
            localStorage.setItem('User1Points', User1Points);
        } else if (checkWinner(grid5) === 'O') {
            alert(User2 + ' wins!');
            User2Points++;
            localStorage.setItem('User2Points', User2Points);
        } else if (IsMatrixFull(grid5)) {
            alert('It is a tie!');
            
        }
    }
}

canvas.addEventListener('click', handleClick);
window.addEventListener('resize', handleResize);

function handleResize() {
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

   
    cellSize = Math.min(canvas.width, canvas.height) / 8;

    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    redrawGrid();
}

function redrawGrid() {
    for (let i = 0; i < MainSiteSetValue2; i++) {
        for (let j = 0; j < MainSiteSetValue2; j++) {
            if (window[`grid${MainSiteSetValue2}`][i][j] === 'X') {
                drawX(i * cellSize, j * cellSize);
            } else if (window[`grid${MainSiteSetValue2}`][i][j] === 'O') {
                drawO(i * cellSize, j * cellSize);
            }
        }
    }
};









