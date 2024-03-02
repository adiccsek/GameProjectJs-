const buttonValue = localStorage.getItem('buttonValue');
let player1 = localStorage.getItem('user1');
let player2 = localStorage.getItem('user2');



function checkWin(grid, player) {
    const size = grid.length;

    
    for (let i = 0; i < size; i++) {
        if (grid[i].every(cell => cell == player)) {
            return true;
        }
    }

    
    for (let i = 0; i < size; i++) {
        if (grid.every(row => row[i] == player)) {
            return true;
        }
    }

   
    if (grid.every((row, i) => row[i] == player)) {
        return true;
    }

  
    if (grid.every((row, i) => row[size - i - 1] == player)) {
        return true;
    }

    return false;
}

if (buttonValue == '3') {
    if (checkWin(grid3, 'X')) {
        window.alert(player1 + " nyert!");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid3();
    } else if (checkWin(grid3, 'O')) {
        window.alert(player2 + " nyert!");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid3();
    } else { 
        if (grid3.every(row => row.every(cell => cell != ""))) {
            window.alert("Döntetlen!");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawGrid3();
        }

    }
} 
else if (buttonValue == '4') {
    if (checkWin(grid4, 'X')) {
        window.alert(player1 + " nyert!");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid4();
    } else if (checkWin(grid4, 'O')) {
        window.alert(player2 + " nyert!");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid4();
    } else { 
        if (grid4.every(row => row.every(cell => cell != ""))) {
            window.alert("Döntetlen!");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawGrid4();
        }

    }
}
else if (buttonValue = '5')
{
    if (checkWin(grid5, 'X')) {
        window.alert(player1 + " nyert!");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid5();
    } else if (checkWin(grid5, 'O')) {
        window.alert(player2 + " nyert!");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid5();
    } else { 
        if (grid5.every(row => row.every(cell => cell != ""))) {
            window.alert("Döntetlen!");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawGrid5();
        }

    }
};