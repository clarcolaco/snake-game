let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //rederiza o desenho
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG(){
    context.fillStyle = "lightpink";
    context.fillRect(0, 0, 16 * box, 16 * box);
}



//cobrinha: array de coordenadas (adicionar um e tirar o ultimo)

function criarCobrinha(){
    for (i=0; i < snake.length; i++){
        context.fillStyle = "black";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}




criarBG();
criarCobrinha();







