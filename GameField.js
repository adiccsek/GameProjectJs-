
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const cellSize = canvas.width / 4;

function drawGrid3() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for (let i = 0; i <= 3; i++)
    { 
        ctx.moveTo(i * cellSize, i);
        ctx.lineTo(i * cellSize, 3 * cellSize);
        ctx.moveTo(i, i * cellSize);
        ctx.lineTo(3 * cellSize, i * cellSize);
    }
    ctx.lineWidth = 2;
    ctx.stroke();

}
 
drawGrid3(buttonValue);

 



