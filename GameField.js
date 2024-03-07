window.onload = function() {

    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

            window.ctx = ctx;
            window.canvas = canvas;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let cellSize = Math.min(canvas.width, canvas.height) / 8;
    const MainSiteSetValue = localStorage.getItem('buttonValue');

    let player1 = localStorage.getItem('user1');
    let player2 = localStorage.getItem('user2');

    function redrawMarks(grid) {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == 'X') {
                    drawX(i * cellSize, j * cellSize);
                } else if (grid[i][j] == 'O') {
                    drawO(i * cellSize, j * cellSize);
                }
            }
        }
    }

    function ResizeWindow() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        cellSize = Math.min(canvas.width, canvas.height) / 8;

        ctx.setTransform(1, 0, 0, 1, 0, 0); 
        ctx.clearRect(0, 0, canvas.width, canvas.height); 

        if (MainSiteSetValue == '3') {
            ctx.translate(canvas.width / 2 -  1.5 * cellSize, canvas.height / 2 -  1.5 * cellSize);
            drawGrid3();
            redrawMarks(grid3);
        } else if (MainSiteSetValue == '4') {
            ctx.translate(canvas.width / 2 - 2 * cellSize, canvas.height / 2 -  2 * cellSize);
            drawGrid4();
            redrawMarks(grid4);
        } else if (MainSiteSetValue == '5') 
        {
            ctx.translate(canvas.width / 2 - 2.5 * cellSize, canvas.height / 2 - 2.5 * cellSize);
            drawGrid5();
            redrawMarks(grid5);
             } 
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
    

 
}
