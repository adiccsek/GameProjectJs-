
/*const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const cellSize = Math.min(canvas.width, canvas.height) / 8;
const buttonValue = localStorage.getItem('buttonValue');
window.buttonValue = buttonValue;

let currentPlayers = 'X';

let grid3 = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
window.grid3 = grid3;
let grid4 = [ 
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
];
window.grid4 = grid4;
let grid5 = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
];
window.grid5 = grid5;



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

function handleClick(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
 
    const I = Math.floor(x / cellSize);
    const J = Math.floor(y / cellSize);
    
    if (buttonValue == '3' && I < 3 && J < 3 && grid3[I][J] == "") {
        grid3[I][J] = currentPlayers;
        if (currentPlayers == 'X') {
            drawX(I * cellSize, J * cellSize);
            currentPlayers = 'O';
        } else {
            drawO(I * cellSize, J * cellSize);
            currentPlayers = 'X';
        }
    }

    if (buttonValue == '4' && I < 4 && J < 4 && grid4[I][J] == "") {
        grid4[I][J] = currentPlayers;
        if (currentPlayers == 'X') {
            drawX(I * cellSize, J * cellSize);
            currentPlayers = 'O';
        } else {
            drawO(I * cellSize, J * cellSize);
            currentPlayers = 'X';
        }
    }

    if (buttonValue == '5' && I < 5 && J < 5 && grid5[I][J] == "") {
        grid5[I][J] = currentPlayers;
        if (currentPlayers == 'X') {
            drawX(I * cellSize, J * cellSize);
            currentPlayers = 'O';
        } else {
            drawO(I * cellSize, J * cellSize);
            currentPlayers = 'X';
        }
    }
}

canvas.addEventListener('click', handleClick);




*/