const canvas = document.querySelector('#tetris');

//we need to get the context out because we can't draw on the dom element
const context = canvas.getContext('2d');

//to make sure this works, we're going to paint the canvas
context.fillStyle = "#000";
context.fillRect(0, 0, canvas.width, canvas.height);