let currentPlayers = 'X';

function drawX(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + cellSize, y + cellSize);
    ctx.moveTo(x + cellSize, y);
    ctx.lineTo(x, y + cellSize);
    ctx.stroke();
}
