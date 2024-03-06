window.onload = function() {

    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

            window.ctx = ctx;
            window.canvas = canvas;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const cellSize = Math.min(canvas.width, canvas.height) / 8;
    const buttonValue = localStorage.getItem('buttonValue');

    let player1 = localStorage.getItem('user1');
    let player2 = localStorage.getItem('user2');


    function ResizeWindow() {
        ctx.setTransform(1, 0, 0, 1, 0, 0); 
        ctx.clearRect(0, 0, canvas.width, canvas.height); 

        if (buttonValue == '3') {
            drawGrid3();
        } else if (buttonValue == '4') {
            drawGrid4();
        } else if (buttonValue == '5') { drawGrid5(); } 
    }
    window.addEventListener('resize', ResizeWindow);
    ResizeWindow();

    canvas.addEventListener('click', handleClick); 

    function drawGrid3() {
        ctx.beginPath();
        for (let i = 0; i <= 3; i++) { 
            ctx.moveTo(i * cellSize, 0);
            ctx.lineTo(i * cellSize, 3 * cellSize);
            ctx.moveTo(0, i * cellSize);
            ctx.lineTo(3 * cellSize, i * cellSize);
        }
        ctx.lineWidth = 2;
        ctx.stroke();
    }
    window.drawGrid3 = drawGrid3;

    function drawGrid4() {
        ctx.beginPath();
        for (let i = 0; i <= 4; i++) { 
            ctx.moveTo(i * cellSize, 0);
            ctx.lineTo(i * cellSize, 4 * cellSize);
            ctx.moveTo(0, i * cellSize);
            ctx.lineTo(4 * cellSize, i * cellSize);
        }
        ctx.lineWidth = 2;
        ctx.stroke();
    }
    window.drawGrid4 = drawGrid4;

    function drawGrid5() {
        ctx.beginPath();
        for (let i = 0; i <= 5; i++) { 
            ctx.moveTo(i * cellSize, 0);
            ctx.lineTo(i * cellSize, 5 * cellSize);
            ctx.moveTo(0, i * cellSize);
            ctx.lineTo(5 * cellSize, i * cellSize);
        }
        ctx.lineWidth = 2;
        ctx.stroke();
    };
    window.drawGrid5 = drawGrid5;

    if (buttonValue == '3') {
        drawGrid3();
    } else if (buttonValue == '4') {
        drawGrid4();
    } else if (buttonValue == '5') { drawGrid5(); } 
}
