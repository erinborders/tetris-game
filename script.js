const canvas = document.querySelector('#tetris');

//we need to get the context out because we can't draw on the dom element
const context = canvas.getContext('2d');

//to make sure this works, we're going to paint the canvas
context.fillStyle = "#000";
context.fillRect(0, 0, canvas.width, canvas.height);

//making the t block in tetris --> we're going to represent this with a 2 dimensional matrix
const matrix = [
    [0, 0, 0],
    [1, 1, 1,],
    [0, 1, 0],
]

//now i want to draw this first piece
matrix.forEach((row, y) => {
    row.forEach((value, x) => {
        //we're going to make all the zero values transparent and fill in the rest
        if (value !== 0) {
            context.fillStyle = "red";
            context.fillRect(x, y, 1, 1);
        }
    });
});